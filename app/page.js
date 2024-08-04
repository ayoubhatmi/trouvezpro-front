import Categories from "@/components/sections/Categories";
import Hero from "@/components/sections/Hero";
import NavBar from "@/components/NavBar";
import LatestArticles from "@/components/sections/LatestArticles";
import FranceMap from "@/components/FranceMap";
import Regions from "@/components/sections/Regions";
import AddYourCompnay from "@/components/sections/AddYourCompnay";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Regions />
      <LatestArticles />
      <AddYourCompnay />
    </main>
  );
}
