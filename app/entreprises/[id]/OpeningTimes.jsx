import { Card, CardTitle } from "@/components/ui/card";

const openingTimes = [
  { day: "Lundi", hours: "09h00 - 18h30" },
  { day: "Mardi", hours: "09h00 - 18h30" },
  { day: "Mercredi", hours: "09h00 - 18h30" },
  { day: "Jeudi", hours: "09h00 - 18h30" },
  { day: "Vendredi", hours: "09h00 - 18h30" },
  { day: "Samedi", hours: "09h00 - 17h00" },
  { day: "Dimanche", hours: "Fermé" },
];

const OpeningTimes = () => {
  return (
    <Card className="flex flex-col gap-4 p-4 w-full">
      <CardTitle>Horaires d'ouverture</CardTitle>
      <ul className="flex flex-col gap-1">
        {openingTimes.map((info, index) => (
          <li key={index} className="relative flex justify-between">
            <p className="font-medium">{info.day}</p>
            <p
              className={
                info.hours === "Fermé"
                  ? "text-red-500 text-muted-foreground"
                  : "text-muted-foreground"
              }
            >
              {info.hours}
            </p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default OpeningTimes;
