import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { Button } from "./ui/button";

function NavBar() {
  const menuItems = [
    {
      label: "Catégories",
      path: "/categories",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Conatct",
      path: "/contactez-nous",
    },
  ];

  return (
    <div>
      <header className="flex justify-between h-16 w-full shrink-0 items-center">
        <Link className="font-bold text-3xl lg:flex mr-6" href={"/"}>
          TrouvezPro
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden self-  bg-[#03346E]">
              <AlignJustify className="h-6 w-6" />
              <span className="sr-only">Toggle Navigation Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link className="mr-6 hidden lg:flex" href={"#"}>
              <h3>TrouvezPro</h3>
            </Link>
            <div className="grid gap-2 py-6">
              {menuItems.map((menuItem, index) => (
                <Link
                  href={menuItem.path}
                  key={index}
                  className="flex w-full items-center py-2 text-lg font-semibold hover:font-semibold"
                >
                  {menuItem.label}
                </Link>
              ))}
              <Button className="w-fit mt-4 p-6 bg-[#03346E]">
                Ajouter votre Entreprise
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <nav className="ml-auto hidden lg:flex gap-6 items-center">
          {menuItems.map((menuItem, index) => (
            <Link
              href={menuItem.path}
              key={index}
              className="group inline-flex h-9 w-max items-center rounded-md  px-4 py-2 text-sm font-semibold hover:underline "
            >
              {menuItem.label}
            </Link>
          ))}

          <Button className="w-fit p-6 bg-[#03346E] hover:bg-[#30629e]" asChild>
            <Link href={"/ajouter-entreprise"}>Ajouter votre Entreprise</Link>
          </Button>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
