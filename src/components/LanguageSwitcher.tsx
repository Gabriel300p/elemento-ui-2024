"use client";

import { i18n } from "@/i18n/i18n-config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathName = usePathname();
  const currentLang = pathName.split("/")[1];

  return (
    <div className="fixed top-4 right-4 z-50">
      <ul className="flex space-x-2">
        {i18n.locales.map((locale) => {
          const isActive = currentLang === locale;
          return (
            <li key={locale}>
              <Link
                href={`/${locale}${pathName.slice(3)}`}
                className={`px-3 py-2 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {locale.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
