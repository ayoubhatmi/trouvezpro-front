import BlogPostCard from "../BlogPostCard";

const LatestArticles = async () => {
  return (
    <div className="flex flex-col items-center pb-12 gap-8">
      <h2 className="text-2xl mt-5 lg:text-4xl font-semibold text-center">
        Nos derniers articles
      </h2>
      <div>
        <BlogPostCard />
      </div>
    </div>
  );
};

export default LatestArticles;
