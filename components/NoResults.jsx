import noResultImg from "@/public/images/no-result.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const NoResults = () => {
  return (
    <div className="flex items-center flex-col text-center h-screen">
      <Image src={noResultImg} alt="no results found" />
      <p className="mt-[-3rem] mb-4 font-semibold">
        Oups, Aucune entreprise trouvée !
      </p>

      <Button className="w-fit p-6 bg-[#2457C2]" asChild>
        <Link href={"/"}>Retourner à l&#39;accueil</Link>
      </Button>
    </div>
  );
};

export default NoResults;
