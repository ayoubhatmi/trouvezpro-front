import { Card, CardTitle } from "@/components/ui/card";
import Copy from "@/components/Copy";

const legalInfo = [
  { label: "SIRET", value: "12345678900012" },
  { label: "SIREN", value: "123456789" },
  { label: "Code NAF", value: "6201Z" },
  { label: "Effectif", value: "50 employés" },
  {
    label: "Forme Juridique",
    value: "Société par Actions Simplifiée (SAS)",
  },
  { label: "Date de création", value: "2020-05-15" },
];

const LegalInfoCard = () => {
  return (
    <Card className="flex flex-col gap-2 p-4 ">
      <CardTitle>Informations Juridiques</CardTitle>
      <ul>
        {legalInfo.map((info, index) => (
          <li key={index} className="relative flex justify-between">
            <p className="font-medium">{info.label}</p>
            <Copy text={info.value} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default LegalInfoCard;
