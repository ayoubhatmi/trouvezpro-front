import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import image from "@/public/images/send-mail.svg";
import Image from "next/image";

const page = () => {
  return (
    <>
      <PageHeader
        title="Nous contacter"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Contactez-nous" },
        ]}
      />

      <div className="flex flex-row flex-wrap-reverse items-center justify-center mt-8">
        <Card className="flex flex-col p-8 w-full max-w-xl">
          <h3 className="font-bold text-4xl text-[#03346E] mb-2 text-start">
            Contactez-nous
          </h3>
          <p className="mb-8 text-start max-w-xl">
            Utilisez le formulaire ci-dessous pour nous joindre. Nous vous
            répondrons dans les plus brefs délais.
          </p>
          <ContactForm />
        </Card>
      </div>
    </>
  );
};

export default page;
