import { Card, CardTitle } from "@/components/ui/card";
import Copy from "@/components/Copy";
import { MapPin } from "lucide-react";

const AdresseCard = () => {
  const address = "Zhejiang, 310056 China";

  return (
    <Card className="flex flex-col gap-2 p-4">
      <CardTitle>Adresse</CardTitle>
      <div className="flex gap-2 items-center text-[#0F172A]">
        <MapPin />
        <Copy text={address} />
      </div>
      <iframe
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: 8 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d718822.1204472525!2d0.5501747131347775!3d45.27005426440149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f88ca0ef1fdd8b%3A0xc48cc70046f91ad1!2sLa%20Caverne%20d&#39;Ali%20Baba!5e0!3m2!1sfr!2sfr!4v1722174037307!5m2!1sfr!2sfr"
        allowFullScreen
        aria-hidden="false"
        tabIndex="0"
        title="Google Map"
      ></iframe>
    </Card>
  );
};

export default AdresseCard;
