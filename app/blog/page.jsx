import BlogPostCard from "@/components/BlogPostCard";
import PageHeader from "@/components/PageHeader";
import { Pagination } from "@/components/Pagination";
import React from "react";

const page = () => {
  return (
    <>
      <PageHeader
        title="Blog "
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Blog" }]}
      />
      <div className="flex flex-col py-8 gap-4 w-full items-center">
        <BlogPostCard />
      </div>
      <Pagination />
    </>
  );
};

export default page;
