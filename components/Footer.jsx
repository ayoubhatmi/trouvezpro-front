import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const resourcesItems = [
    {
      label: "API pour développeurs",
      // path: "/developers",
      path: "/contactez-nous",
    },
    {
      label: "Blog",
      path: "/blog",
    },
  ];

  const aboutItems = [
    {
      label: "Inscription sur TrouvezPro",
      path: "/ajouter-entreprise",
    },
    {
      label: "Contactez-nous",
      path: "/contactez-nous",
    },
    {
      label: "Mentions légales",
      path: "/mentions-legales",
    },
  ];

  return (
    <footer className="flex flex-col items-center gap-4 bg-[#E2E8F0] pt-8">
      <div className="flex w-full justify-around mx-auto max-w-7xl p-6 lg:px-8 flex-wrap gap-8">
        <ul className="flex flex-col gap-2 w-full sm:w-fit">
          <li className="text-xl font-semibold text-[#03346E]">À propos</li>
          {aboutItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-2 w-full sm:w-fit">
          <li className="text-xl font-semibold text-[#03346E]">Ressources</li>
          {resourcesItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-2 w-full sm:w-fit">
          <li className="text-xl font-semibold text-[#03346E]">Suivez-Nous</li>

          <li className="flex gap-2">
            <Link target="_blank" href="https://www.facebook.com/">
              <FaFacebookSquare size={38} />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/">
              <FaLinkedin size={38} />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/">
              <FaSquareXTwitter size={38} />
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-sm p-4">
        TrouvezPro.com | Tous droits réservés © 2024
      </p>
    </footer>
  );
};

export default Footer;
