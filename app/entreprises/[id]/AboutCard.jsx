import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import img from "@/public/images/alibaba-logo.svg";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const AboutCard = () => {
  return (
    <Card className="flex flex-col gap-2 p-4">
      <CardTitle>À propos de l'entreprise</CardTitle>
      <p>
        Since our founding in 1998, Google has grown by leaps and bounds.
        Starting from two computer science students in a university dorm room,
        we now have thousands of employees and offices around the world. These
        Googlers build products that help create opportunities for everyone,
        whether down the street or across the globe.
      </p>
      <p className="font-semibold text-lg">Services</p>
      <ul className="flex flex-wrap gap-2">
        <li>
          <Badge className="rounded-sm text-base bg-[#E2E8F0] hover:bg-[#E2E8F0] text-[#1E293B]">
            E-commerce
          </Badge>
        </li>
        <li>
          <Badge className="rounded-sm text-base bg-[#E2E8F0] hover:bg-[#E2E8F0] text-[#1E293B]">
            Logistique
          </Badge>
        </li>
        <li>
          <Badge className="rounded-sm text-base bg-[#E2E8F0] hover:bg-[#E2E8F0] text-[#1E293B]">
            IT
          </Badge>
        </li>
      </ul>
    </Card>
  );
};

export default AboutCard;
