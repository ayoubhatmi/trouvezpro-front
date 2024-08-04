import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const BenefitCard = ({ title, image }) => {
  return (
    <Card className="p-2 w-full flex flex-wrap max-w-sm h-96 items-center justify-center gap-4 text-center">
      <Image src={image} className="w-3/4" />
      <CardTitle className="text-base  font-semibold">{title}</CardTitle>
    </Card>
  );
};

export default BenefitCard;
