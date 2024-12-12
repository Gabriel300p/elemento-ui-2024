import { Locale } from "@/i18n/i18n-config";
import ContactForm from "../contact-form/ContactForm";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const lang = params.lang || "pt";

  return <ContactForm lang={lang} />;
}
