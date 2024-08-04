import Image from "next/image";
import SearchBar from "../SearchBar";
import heroImage from "@/public/images/hero.png";

const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="w-full h-full relative">
        <div className="flex flex-col lg:flex-row gap-10 lg:mt-16 mt-8">
          <div className="w-full lg:w-[50%] flex flex-col md:px-2 lg:px-0 p-5 lg:p-10">
            <div className="w-full flex justify-start flex-col h-auto lg:pt-7">
              <span className="flex space-x-2">
                <span className="block w-14 mb-2 dark:border-white border-b-2 border-[#03346E] "></span>
                <span className="font-medium dark:text-white text-[#03346E]">
                  Trouvez les Entreprises en France 🇫🇷
                </span>
              </span>
              <h1 className="text-3xl dark:text-white mt-5 lg:text-6xl text-black font-bold">
                Explorez les professionnels de tous les secteurs autour de vous.
              </h1>
              <div className="w-full mt-6 flex items-center text-white justify-start gap-2">
                <SearchBar />
              </div>
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
