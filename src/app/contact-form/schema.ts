import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  howYouKnow: z.string().min(1, {
    message: "Please select an option.",
  }),
  message: z.string().optional(),
  howToHelp: z.array(z.string()).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
