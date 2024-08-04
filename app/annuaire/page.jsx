import SearchBar from "@/components/SearchBar";
import CompanyCard from "@/components/CompanyCard";
import { Pagination } from "@/components/Pagination";

const AnnuairePage = () => {
  return (
    <div className="flex flex-col items-center pt-14 min-h-screen">
      <SearchBar />
      <div className="flex flex-col w-full items-center mt-12 gap-4">
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div>
      <Pagination />
    </div>
  );
};

export default AnnuairePage;
