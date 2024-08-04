import { Poppins } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import CommonLayout from "@/components/CommonLayout";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const metadata = {
  title: "TrouvezPro | Annuaire des Entreprises en France",
  description:
    "Annuaire des Entreprises en France | Trouvez, connectez-vous et explorez des entreprises dans tous les secteurs et régions de France.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <Suspense fallback={<Loading />}>
          <CommonLayout
            attribute="class"
            defaultTheme="system"
            children={children}
          />
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
