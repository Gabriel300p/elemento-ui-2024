import { Locale } from "@/i18n/i18n-config";
import ContactForm from "../contact-form/ContactForm";

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return <ContactForm lang={lang} />;
}
