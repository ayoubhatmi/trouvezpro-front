import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import img from "@/public/images/article1.jpg";
import Link from "next/link";

const BlogPostCard = () => {
  return (
    <Card className="w-full max-w-sm">
      <Image
        src={img}
        width="400"
        height="250"
        alt="Product"
        className="object-cover rounded-t-md"
      />
      <CardHeader className="p-4">
        <CardTitle className="text-xl">
          <Link href={"/"} className="hover:underline">
            Pourquoi Ajouter Votre Entreprise à TrouvezPro ? Découvrez les
            Avantages !
          </Link>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default BlogPostCard;
