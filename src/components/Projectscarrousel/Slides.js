import bluel from "../../assets/img/bluel.webp";
import bluel350 from "../../assets/img/bluel-350.webp";
import bluel800 from "../../assets/img/bluel-800.webp";
import bluel1100 from "../../assets/img/bluel-1100.webp";
import bluel1420 from "../../assets/img/bluel-1420.webp";
import bluel1600 from "../../assets/img/bluel-1600.webp";
import booki from "../../assets/img/booki.webp";
import ohmyfood from "../../assets/img/ohmyfood.webp";

export const slides = [
  {
    image: bluel,
    langage: "html/css/js",
    context: "Site portfolio d'une photographe avec gestion de la connexion",
    root: "https://github.com/BoissonMathis/Boisson_Mathis_6_portfolio_sophie_bluelt_20-04-2023",
    srcSet: `${bluel350} 350w, ${bluel800} 800w, ${bluel1100} 1100w, ${bluel1420} 1420w, ${bluel1600} 1600w`,
    size: "(min-width: 1040px) 800px, (min-width: 620px) 550px, 350px",
    target:"_blank"
  },
  {
    image: booki,
    langage: "html/css",
    context: "Site de réservation de logements en ligne",
    root: "/booki",
    srcSet: "",
    size: "",
    target:""
  },
  {
    image: ohmyfood,
    langage: "html/css",
    context: "Site de réservation de restos en ligne avec quelques animations",
    root: "/ohmyfood",
    srcSet: "",
    size: "",
    target:""
  },
];
