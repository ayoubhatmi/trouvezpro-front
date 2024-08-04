import LatestArticles from "@/components/sections/LatestArticles";
import Advantages from "./Avantage";
import Hero from "./Hero";

const page = () => {
  return (
    <div className="flex flex-col gap-16 justify-center items-center w-full">
      <Hero />
      <Advantages />
      <LatestArticles />
    </div>
  );
};

export default page;
