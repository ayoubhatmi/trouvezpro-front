import { Card } from "@/components/ui/card";
import Image from "next/image";
import img from "@/public/images/alibaba-logo.svg";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { MapPin } from "lucide-react";

const CompanyCard = () => {
  return (
    <Card className="w-full max-w-3xl flex p-4">
      <Image src={img} alt="logo" className="object-cover rounded-md w-32" />

      <div className="flex flex-col gap-2 w-full pl-4 justify-between ">
        <div>
          <div className="text-lg flex justify-between sm:items-center">
            <Link
              href={"/entreprises/alibaba"}
              className="hover:underline text-[#0F172A] font-semibold text-xl sm:text-2xl"
            >
              Alibaba Technology
            </Link>
            <Badge className="w-fit min-w-fit rounded-sm h-fit bg-[#B8FEC9] text-[#18753C] hover:bg-[#B8FEC9]">
              EN ACTIVITÉ
            </Badge>
          </div>

          <p className="mt-2 text-[#0F172A] font-medium">D&B Business</p>
        </div>
        <div className="flex flex-wrap justify-between gap-2">
          <ul className="flex-wrap gap-2 hidden sm:flex">
            <li>
              <Badge className="rounded-sm bg-[#E2E8F0] hover:bg-[#E2E8F0] text-[#1E293B]">
                E-commerce
              </Badge>
            </li>
            <li>
              <Badge className="rounded-sm  bg-[#E2E8F0] hover:bg-[#E2E8F0] text-[#1E293B]">
                Logistique
              </Badge>
            </li>
            <li>
              <Badge className="rounded-sm bg-[#E2E8F0] hover:bg-[#E2E8F0] text-[#1E293B]">
                IT
              </Badge>
            </li>
          </ul>
          <div className="flex gap-2 items-center text-[#0F172A] text-sm">
            <MapPin />
            <p className="">Zhejiang, 310056 China </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CompanyCard;
