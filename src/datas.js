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
  style: [
    {
      id: 1,
      name: "Atypique",
      photo:
        "https://cdn.pixabay.com/photo/2019/10/07/05/32/peniche-4531775_1280.jpg"
    },
    {
      id: 2,
      name: "Classique",
      photo:
        "https://cdn.pixabay.com/photo/2018/05/13/21/57/home-3398116_1280.jpg"
    },
    {
      id: 3,
      name: "Prestige",
      photo:
        "https://cdn.pixabay.com/photo/2019/02/22/13/56/biarritz-4013618_1280.jpg"
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
