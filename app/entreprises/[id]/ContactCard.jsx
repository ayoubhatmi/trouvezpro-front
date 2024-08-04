"use client";
import { Card, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Globe } from "lucide-react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import Link from "next/link";

const ContactCard = () => {
  return (
    <Card className="flex flex-col gap-4 p-4 w-full">
      <CardTitle>Coordonnées de contact</CardTitle>
      <ul className="flex flex-col gap-4">
        <li className="flex gap-2 items-center text-[#0F172A]">
          <Mail />
          <p>contact@alibaba.com</p>
        </li>
        <li className="flex gap-2 items-center text-[#0F172A]">
          <Phone />
          <p>+123 456 7890</p>
        </li>
        <li className="flex gap-2 items-center text-[#0F172A]">
          <Globe />
          <Link href={"/"} className="underline">
            www.alibaba.com
          </Link>
        </li>
      </ul>
      <p className="font-semibold text-lg">Réseaux sociaux</p>

      <ul className="flex gap-4">
        <li>
          <Link target="_blank" href="https://www.facebook.com/">
            <FaFacebookSquare size={32} />
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://www.linkedin.com/">
            <FaLinkedin size={32} />
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://twitter.com/">
            <FaSquareXTwitter size={32} />
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://www.instagram.com/">
            <FaInstagramSquare size={32} />
          </Link>
        </li>
      </ul>
    </Card>
  );
};

export default ContactCard;
