import { CarTaxiFront, Map, MapPin, Plane } from "lucide-react";

export const groupedRoutes = [
 
  {
    title: "Bälinge",
    routes: [
      { route: "Bälinge → Uppsala", price: "350 kr" },
      { route: "Bälinge → Arlanda flygplats", price: "900 kr" },
    ],
  },
  {
    title: "Björklinge",
    routes: [
      { route: "Uppsala → Björklinge", price: "500 kr" },
      { route: "Björklinge → Arlanda flygplats", price: "1100 kr" },
    ],
  },
  {
    title: "Vänge",
    routes: [
      { route: "Uppsala → Vänge", price: "300 kr" },
      { route: "Vänge → Arlanda flygplats", price: "850 kr" },
    ],
  },
  {
    title: "Storvreta",
    routes: [
      { route: "Uppsala → Storvreta", price: "350 kr" },
      { route: "Storvreta → Arlanda flygplats", price: "850 kr" },
    ],
  },
  {
    title: "Knivsta & Stockholm",
    routes: [
      { route: "Uppsala → Knivsta", price: "400 kr" },
      { route: "Uppsala → Stockholm", price: "1000 kr" },
    ],
  },
  {
    title: "Lindbacken",
    routes: [
      { route: "Uppsala → Lindbacken", price: "250 kr" },
      { route: "Lindbacken → Arlanda flygplats", price: "750 kr" },
    ],
  },
  {
    title: "Almunge",
    routes: [
      { route: "Uppsala → Almunge", price: "500 kr" },
      { route: "Almunge → Arlanda flygplats", price: "1100 kr" },
    ],
  },
  {
    title: "Uppsala & Arlanda",
    routes: [
      { route: "Uppsala → Arlanda flygplats", price: "549 kr" },
    ],
  },
];



export const serviceItems = [
  {
    title: "Resor inom Uppsala",
    desc: "Boka din taxi 30 minuter före den planerade tiden.",
  },
  {
    title: "Planerade flygplatstransfer",
    desc: "Dra nytta av fasta priser för flygplatstransfer och andra längre resor.",
  },
  {
    title: "Taxi vid nödsituationer",
    desc: "Kontakta oss så ser vi om vi kan hämta dig omedelbart från angiven plats.",
  },
  {
    title: "Lojalitetsprogram",
    desc: "Skapa ett konto, samla poäng och få rabatter på resor.",
  },
];

export const navLinks = [
  { label: "Hem", href: "#" },
  { label: "Om oss", href: "#about" },
  { label: "Våra tjänster", href: "#services" },
  { label: "Priser", href: "#price" },
  { label: "Kontakta oss", href: "#contact" },
];

export const services = [
  {
    icon: <MapPin size={70} className="text-[#fdb813]" />,
    title: "Adresshämtning",
    desc: "Vi hämtar alltid våra kunder i tid. Tillgänglig 24/7.",
  },
  {
    icon: <Plane size={70} className="text-[#fdb813]" />,
    title: "Flygplatstransfer",
    desc: "Drive Uppsala är specialiserat på flygplatstransfer dygnet runt.",
  },
  {
    icon: <Map size={70} className="text-[#fdb813]" />,
    title: "Långdistansresor",
    desc: "Vi erbjuder långdistansresor till valfri destination.",
  },
  {
    icon: <CarTaxiFront size={70} className="text-[#fdb813]" />,
    title: "Taxiturer",
    desc: "Vi erbjuder taxiturer av olika längd och komplexitet.",
  },
];
