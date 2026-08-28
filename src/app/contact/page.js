import ContactHero from "@/components/sections/contact/ContactHero";
import ContactOffices from "@/components/sections/contact/ContactOffices";

export const metadata = {
  title: "Contact — Sant Mahasabha Society of Alberta",
  description:
    "Get in touch with the Sant Mahasabha Society of Alberta. Find our Calgary and New Delhi office addresses and phone number.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactOffices />
    </>
  );
}
