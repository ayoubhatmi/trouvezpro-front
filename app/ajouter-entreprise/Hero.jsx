import Image from "next/image";
import heroImage from "@/public/images/add-company-hero.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="w-full h-full relative">
        <div className="flex flex-col lg:flex-row gap-10 lg:mt-8 mt-8">
          <div className="w-full lg:w-[50%] flex flex-col md:px-2 lg:px-0 p-5 lg:p-10">
            <div className="w-full flex justify-start flex-col h-auto lg:pt-7">
              <h1 className="text-3xl mt-5 lg:text-4xl text-black font-semibold">
                Ajoutez Votre Entreprise dès Maintenant !
              </h1>
              <p className="mt-2 text-lg">
                C'est simple, rapide et gratuit. Rejoignez notre annuaire et
                augmentez votre visibilité !
              </p>
              <Button className="w-fit p-6 mt-4 bg-[#2457C2]" asChild>
                <Link href={"/contactez-nous"}>S'inscrire à TrouvezPro</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full lg:w-[50%] flex items-center justify-end">
            <Image src={heroImage} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
