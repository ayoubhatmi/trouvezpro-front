import Link from "next/link";

const CategoryCard = ({ category, href, icon, style }) => {
  return (
    <Link
      href={href}
      className="flex gap-4 rounded-lg outline  outline-1 outline-[#CBD5E1] bg-card text-card-foreground shadow-sm pr-4 h-24 items-center text-lg font-medium"
    >
      {icon && style && (
        <span className={`flex items-center p-8 ${style} rounded-s-lg h-24`}>
          {icon}
        </span>
      )}

      {category}
    </Link>
  );
};

export default CategoryCard;
