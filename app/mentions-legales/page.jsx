import PageHeader from "@/components/PageHeader";
import { Card, CardTitle } from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col py-4 w-full gap-4">
      <PageHeader
        title="Mentions légales"
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Mentions légales" },
        ]}
      />
      <Card className="flex flex-col gap-4 p-8 pb-12 w-full">
        <h2 className="text-xl font-semibold">Éditeur du site :</h2>
        <p>
          <br />
          [Adresse de l'entreprise]
          <br />
          [Numéro de téléphone]
          <br />
          [Adresse e-mail]
          <br />
          [Numéro SIRET] : [Numéro SIRET]
          <br />
          [Numéro de TVA intracommunautaire] : [Numéro de TVA]
        </p>
        <h2 className="text-xl font-semibold">Directeur de la publication :</h2>
        <p>
          [Nom du directeur]
          <br />
          [Fonction du directeur]
        </p>
        <h2>Hébergement du site :</h2>
        <p>
          [Nom de l'hébergeur]
          <br />
          [Adresse de l'hébergeur]
          <br />
          [Numéro de téléphone de l'hébergeur]
        </p>
        <h2 className="text-xl font-semibold">Propriété intellectuelle :</h2>
        <p>
          Le contenu du site
          <a href="http://www.trouvezpro.com">www.trouvezpro.com</a>, y compris
          les textes, images, graphiques, logos, vidéos, et tout autre élément,
          est protégé par les lois en vigueur sur la propriété intellectuelle.
          Toute reproduction, distribution, modification, ou utilisation de ces
          éléments, en tout ou en partie, sans l'autorisation préalable écrite
          de l'éditeur est interdite.
        </p>
        <h2 className="text-xl font-semibold">Responsabilité :</h2>
        <p>
          L’éditeur du site s’efforce d’assurer l’exactitude et la mise à jour
          des informations diffusées sur le site. Cependant, des erreurs ou
          omissions peuvent survenir. L’utilisateur est seul responsable de
          l’usage qu’il fait des informations disponibles sur le site. L’éditeur
          ne peut être tenu responsable des dommages directs ou indirects
          résultant de l’utilisation du site ou des informations contenues.
        </p>
        <h2 className="text-xl font-semibold">Liens hypertextes :</h2>
        <p>
          Le site peut contenir des liens vers d’autres sites web. L’éditeur
          n’assume aucune responsabilité quant au contenu de ces sites externes
          et n'exerce aucun contrôle sur leur contenu.
        </p>
        <h2 className="text-xl font-semibold">
          Protection des données personnelles :
        </h2>
        <p>
          Les données personnelles recueillies sur le site
          <a href="http://www.trouvezpro.com"> www.trouvezpro.com</a> sont
          traitées conformément à la{" "}
          <a href="https://www.cnil.fr/fr/la-loi-informatique-et-libertes">
            Loi Informatique et Libertés
          </a>
          et au
          <a href="https://www.cnil.fr/fr/reglement-europeen-sur-la-protection-des-donnees">
            Règlement Général sur la Protection des Données (RGPD)
          </a>
          . Pour plus d’informations sur la gestion des données personnelles,
          veuillez consulter notre{" "}
          <a href="/privacy-policy">Politique de Confidentialité</a>.
        </p>
        <h2 className="text-xl font-semibold">Cookies :</h2>
        <p>
          Le site utilise des cookies pour améliorer l’expérience utilisateur et
          réaliser des statistiques de visites. Vous pouvez gérer les cookies
          via les paramètres de votre navigateur. Pour plus d’informations,
          veuillez consulter notre{" "}
          <a href="/cookie-policy">Politique de Cookies</a>.
        </p>
        <h2 className="text-xl font-semibold">
          Modification des mentions légales :
        </h2>
        <p>
          L’éditeur se réserve le droit de modifier les présentes mentions
          légales à tout moment. Les modifications seront publiées sur cette
          page. Il est de la responsabilité de l’utilisateur de consulter
          régulièrement les mentions légales.
        </p>
      </Card>
    </div>
  );
};

export default page;
