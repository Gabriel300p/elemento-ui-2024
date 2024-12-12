"use client";

import { BrazilFlag, USAFlag } from "@/assets/icons/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { i18n } from "@/i18n/i18n-config";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathName = usePathname();
  const router = useRouter();
  const currentLang = pathName.split("/")[1];

  const handleLanguageChange = (locale: string) => {
    router.push(`/${locale}${pathName.slice(3)}`);
  };

  return (
    <Select defaultValue={currentLang} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-fit bg-black/20 border-none text-white">
        <div className="flex items-center space-x-2 mr-3">
          {currentLang === "en" ? <USAFlag /> : <BrazilFlag />}
        </div>
      </SelectTrigger>
      <SelectContent>
        {i18n.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            <div className="flex items-center space-x-2">
              {locale === "en" ? <USAFlag /> : <BrazilFlag />}
              <span>{locale === "en" ? "English" : "Português"}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
