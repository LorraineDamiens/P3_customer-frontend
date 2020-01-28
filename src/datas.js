import React from "react";
import SendDatas from "./components/SendDatas";

const Animations = {
  style: [
    { name: "Digitale" },
    { name: "Extreme" },
    { name: "Ludique" },
    { name: "Motorisé" },
    { name: "Participative" },
    { name: "En close up" },
    { name: "Visuel" },
    { name: "Sur scène" }
  ],

  fitForOutdoor: ["Intérieur", "Extérieur"]
};

const Restaurants = {
  style: [
    { name: "Brunch" },
    { name: "Déjeuner" },
    { name: "Diner" },
    { name: "Cocktail déjeunatoire" },
    { name: "Cocktail dinatoire" },
    { name: "Buffet" },
    { name: "Plateau repas" },
    { name: "Pause gourmande" }
  ],

  size: [{ name: "Généreux" }, { name: "Moyen" }, { name: "Petite faim" }],

  serviceAtTable: ["Debout", "Service à table"]
};

const Audiovisual = {
  activities: [
    { name: "DJ" },
    { name: "Orchestre musical" },
    { name: "Live musical" },
    { name: "Son" },
    { name: "Lumière - Projection" },
    { name: "Régie" },
    { name: "Photographe" },
    { name: "Drone - Vidéo" },
    { name: "Création et impressions publicitaires" }
  ]
};

const Staff = {
  activities: [
    { name: "Influenceurs - Célébrités" },
    { name: "Speaker - Conférenciers" },
    { name: "Maitre d'hotel" },
    { name: "Animateur" },
    { name: "Serveurs" },
    { name: "Hotesses" },
    { name: "Agent de sécurité" },
    { name: "Chef cuisinier" },
    { name: "Voiturier" },
    { name: "Transport évènementiel" },
    { name: "VTC" }
  ]
};
const Equipment = {
  activities: [
    { name: "Décoration florale" },
    { name: "Paperboard" },
    { name: "Ecran de projection" },
    { name: "Matériel son" },
    { name: "Vidéo projecteur" },
    { name: "Mobilier de décoration" }
  ]
};
const Reception = {
  style: [{ name: "Atypique" }, { name: "Classique" }, { name: "Prestige" }],
  photo: [
    {
      link:
        "https://r-cf.bstatic.com/images/hotel/max1024x768/163/163344612.jpg"
    },
    {
      link:
        "https://media-cdn.tripadvisor.com/media/photo-s/0a/e8/94/86/la-vieille-auberge.jpg"
    },
    {
      link:
        "https://cdn.pixabay.com/photo/2018/08/21/17/04/paris-3621678_1280.jpg"
    }
  ],

  fitForOutdoor: ["Intérieur", "Extérieur"]
};

export const services = {
  Staff,
  Reception,
  Animations,
  Restaurants,
  Audiovisual,
  Equipment
};
