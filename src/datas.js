import React from "react";
import SendDatas from "./components/SendDatas";

/* export const services = [
  {
    id: 1,
    name: "Lieu de réception",
    color: "primary",
    buttonColor: "secondary",
    types: [
      { label: "Atypique", color: "bg-primary" },
      { label: "Classique", color: "bg-secondary" },
      { label: "Prestige", color: "bg-success" }
    ],
    service: null,
    size: null,
    outdoor: null,
    component: <SendDatas />
  },
  {
    id: 2,
    name: "Traiteur et boisson",
    color: "success",
    buttonColor: "primary",
    types: [
      { label: "Brunch", color: "bg-light" },
      { label: "Déjeuner", color: "bg-info" },
      { label: "Cocktail", color: "bg-warning" },
      { label: "Dîner", color: "bg-danger" }
    ],
    service: null,
    size: [
      { label: "Généreux", color: "bg-success" },
      { label: "Moyen", color: "bg-secondary" },
      { label: "Petite faim", color: "bg-primary" }
    ],
    outdoor: null
  },
  {
    id: 3,
    name: "Animation",
    color: "info",
    buttonColor: "success",
    types: [
      { label: "Digitale", color: "bg-warning" },
      { label: "Extrème", color: "bg-info" },
      { label: "Ludique", color: "bg-light" },
      { label: "Motorisé", color: "bg-dark" },
      { label: "Participative", color: "bg-primary" },
      { label: "En close up", color: "bg-dark" },
      { label: "Visuel", color: "bg-light" },
      { label: "Sur scène", color: "bg-info" }
    ],
    service: null,
    size: null,
    outdoor: null
  },
  {
    id: 4,
    name: "Audiovisuel & Com",
    color: "warning",
    buttonColor: "info",
    types: [
      { label: "DJ", color: "bg-light" },
      { label: "Orchestre musical", color: "bg-dark" },
      { label: "Live musical", color: "bg-primary" },
      { label: "Son", color: "bg-secondary" },
      { label: "Lumière/Projection", color: "bg-success" },
      { label: "Régie", color: "bg-danger" },
      { label: "Photographe", color: "bg-warning" },
      { label: "Drône/Vidéo", color: "bg-info" },
      { label: "Création & impressions publicitaires", color: "bg-light" }
    ],
    service: null,
    size: null,
    outdoor: null
  },

  {
    id: 5,
    name: "Staff",
    color: "secondary",
    buttonColor: "danger",
    types: [
      { label: "Maître d'hôtel", color: "bg-secondary" },
      { label: "Influenceurs/Célébrités", color: "bg-primary" },
      { label: "Speaker/Conférenciers", color: "bg-dark" },
      { label: "Animateur", color: "bg-light" },
      { label: "Serveurs", color: "bg-info" },
      { label: "Hôtesses", color: "bg-warning" },
      { label: "Agent de sécurité", color: "bg-danger" },
      { label: "Chef cuisinier", color: "bg-success" },
      { label: "Voiturier", color: "bg-secondary" },
      { label: "Transport évènementiel", color: "bg-primary" },
      { label: "VTC", color: "bg-dark" }
    ],
    service: null,
    size: null,
    outdoor: null
  }
]; */

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

  /* activities: [
    "Animation vin",
    "Animation Teambuilding",
    "Animation Cocktail",
    "Animation culinaire",
    "Animations digitales",
    "Animation artistique",
    "Animation culturelle",
    "Animation robot",
    "Animation spectacle",
    "Animation sportive",
    "Photobooth",
    "Artificiers",
    "Bien être et beauté",
    "Cadeau d'entreprise",
    "Dégustation vin et spiritueux",
    "Escape Game",
    "Magie et Close-up",
    "Structure gonflable",
    "VR et Réalité augmentée",
    "Décoration évenementielle",
    "Esthétique / Coiffure / Maquillage"
  ], */

  fitForOutdoor: ["Intérieur", "Extérieur"]
};

const Restaurants = {
  style: [
    { name: "Brunch" },
    { name: "Déjeuner" },
    { name: "Dîner" },
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
    { name: "Lumière/Projection" },
    { name: "Régie" },
    { name: "Photographe" },
    { name: "Drône/Vidéo" },
    { name: "Création & impressions publicitaires" }
  ]
};

const Staff = {
  activities: [
    { name: "Influenceurs/Célébrités" },
    { name: "Speaker/Conférenciers" },
    { name: "Maître d'hôtel" },
    { name: "Animateur" },
    { name: "Serveurs" },
    { name: "Hôtesses" },
    { name: "Agent de sécurité" },
    { name: "Chef cuisinier" },
    { name: "Voiturier" },
    { name: "Transport évènementiel" },
    { name: "VTC" }
  ]
};

const Reception = {
  style: [{ name: "Atypique" }, { name: "Classique" }, { name: "Prestige" }],

  fitForOutdoor: ["Intérieur", "Extérieur"]
};

export const services = {
  Staff,
  Reception,
  Animations,
  Restaurants,
  Audiovisual
};
