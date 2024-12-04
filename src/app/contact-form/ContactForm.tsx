"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useToast } from "@/hooks/use-toast";
import { getDictionary } from "@/i18n/get-dictionary";
import { Locale } from "@/i18n/i18n-config";
import { Dictionary } from "@/types/dictionary";
import { contactFormSchema, ContactFormValues } from "./schema";

export default function ContactForm({ lang }: { lang: Locale }) {
  const [dict, setDict] = useState<Dictionary | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    getDictionary(lang).then((dictionary) => {
      // Type assertion after validation
      if (isDictionary(dictionary)) {
        setDict(dictionary);
      }
    });
  }, [lang]);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      howYouKnow: "",
      message: "",
      howToHelp: [],
    },
  });

  const mutation = useMutation({
    mutationFn: (values: ContactFormValues) =>
      fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).then((res) => {
        if (!res.ok) throw new Error("Erro na requisição");
        return res.json();
      }),
    onSuccess: () => {
      if (dict) {
        toast({
          title: dict.form.success,
          description: "Entraremos em contato em breve.",
        });
      }
      form.reset();
    },
    onError: () => {
      if (dict) {
        toast({
          title: dict.form.error,
          description: "Por favor, tente novamente mais tarde.",
          variant: "destructive",
        });
      }
    },
  });

  function onSubmit(values: ContactFormValues) {
    mutation.mutate(values);
  }

  if (!dict) return null;

  const howToHelpOptions = [
    { id: "components", label: dict.howToHelpOptions.components },
    { id: "flexibility", label: dict.howToHelpOptions.flexibility },
    { id: "documentation", label: dict.howToHelpOptions.documentation },
    { id: "style", label: dict.howToHelpOptions.style },
    { id: "performance", label: dict.howToHelpOptions.performance },
    { id: "other", label: dict.howToHelpOptions.other },
  ];

  return (
    <section className="px-20 py-14">
      <div className="w-3/4">
        <h1 className="text-4xl font-bold text-gray-600 leading-snug">
          {dict.form.title}{" "}
          <span className="text-emerald-600 underline">
            {dict.form.titleHighlight}
          </span>
          . {dict.form.titleEnd}
        </h1>
        <p className="text-lg font-normal text-gray-500 mt-2">
          {dict.form.subtitle}
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-11"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.form.name}</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.form.email}</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="howYouKnow"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.form.howYouKnow}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma opção" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.entries(dict.howYouKnowOptions).map(
                      ([key, value]) => (
                        <SelectItem key={key} value={key}>
                          {value}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.form.message}</FormLabel>
                <FormControl>
                  <Textarea placeholder="Digite sua mensagem" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="howToHelp"
            render={({ field }) => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>{dict.form.howToHelp}</FormLabel>
                </div>
                {howToHelpOptions.map((item) => (
                  <FormItem
                    key={item.id}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={
                          Array.isArray(field.value) &&
                          field.value.includes(item.id)
                        }
                        onCheckedChange={(checked) => {
                          const currentValue = Array.isArray(field.value)
                            ? field.value
                            : [];
                          const updatedValue = checked
                            ? [...currentValue, item.id]
                            : currentValue.filter((value) => value !== item.id);
                          field.onChange(updatedValue);
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{item.label}</FormLabel>
                  </FormItem>
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? dict.form.submitting : dict.form.submit}
          </Button>
        </form>
      </Form>
    </section>
  );
}

// Type guard for Dictionary
function isDictionary(obj: any): obj is Dictionary {
  return (
    obj &&
    typeof obj === "object" &&
    "form" in obj &&
    "howYouKnowOptions" in obj &&
    "howToHelpOptions" in obj
  );
}
