import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <form className="flex gap-4 w-full max-w-2xl relative items-center">
      <Input
        className="w-full h-12 pl-12 text-black" // Add padding to accommodate the icon
        placeholder="Nom de l'entreprise, ville, Secteur d'activité..."
      />
      <div className="absolute right-0 left-4 top-1/2 transform -translate-y-1/2">
        <Search className="text-gray-500" />
      </div>

      <Button className="h-12 px-6 bg-[#03346E]" asChild>
        <Link href={"/annuaire"}>Chercher</Link>
      </Button>
    </form>
  );
};

export default SearchBar;
