import { Card } from "@/components/ui/card";
import Image from "next/image";
import img from "@/public/images/alibaba-logo.svg";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Copy from "@/components/Copy";
import { BsFillPatchCheckFill } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HeaderCard = () => {
  return (
    <Card className="flex flex-col gap-4 p-4">
      <div className="w-full flex">
        <Image src={img} alt="logo" className="object-cover rounded-md w-32" />

        <div className="pl-4">
          <div className="flex items-center gap-2">
            <h2 className="text-[#0F172A] font-semibold text-2xl sm:text-3xl">
              Alibaba Technology
            </h2>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <BsFillPatchCheckFill className="text-[#2457C2]" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Contenu édité par le professionnel</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <p className="mt-2 text-[#0F172A] font-medium">D&B Business</p>
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-2">
        <div className="w-full sm:w-fit">
          <p className="font-semibold">Site web</p>
          <Link href={"/"} className="underline text-muted-foreground">
            www.alibaba.com
          </Link>
        </div>
        <div className="w-full sm:w-fit">
          <p className="font-semibold">Adresse</p>
          <Copy text={"Zhejiang, 310056 China"} />
        </div>
        <div className="w-full sm:w-fit">
          <p className="font-semibold ">Effectifs</p>
          <p className="text-muted-foreground">Plus de 10 000</p>
        </div>
        <div className="w-full sm:w-fit">
          <p className="font-semibold">Status</p>
          <Badge className="w-fit min-w-fit rounded-sm h-fit bg-[#B8FEC9] text-[#18753C] hover:bg-[#B8FEC9]">
            EN ACTIVITÉ
          </Badge>
        </div>
      </div>
    </Card>
  );
};

export default HeaderCard;
