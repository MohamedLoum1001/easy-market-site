import { BsTruck } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";

import homme from "../assets/home.png";
import femme from "../assets/femme.png";
import enfant from "../assets/enfant.png";
import equipement from "../assets/equipement.png";
import parking from "../assets/parking.png";

import garçon from "../assets/garçon.png";
import chaussure from "../assets/chaussure.png";
import parfum from "../assets/parfum.png";
import parfum1 from "../assets/parfum1.png";
import sacFille from "../assets/sac-fille.png";
import parfumFemme from "../assets/parfum-femme.png";
import cocacola from "../assets/cocacola.png";
import ceinture from "../assets/ceinture.png";
import bote from "../assets/bote.png";
import montre from "../assets/montre.png";
import storie from "../assets/storie.png";
import nike from "../assets/nike.png";

import container from "../assets/Container.png";

import quote from "../assets/quote-up.png";
import elipse from "../assets/Ellipse 1.png";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { ImFolderUpload } from "react-icons/im";

export const headerImg = [
    {
        img: <BsTruck />,
        title: "Service disponible 24h/24"
    },
    {
        img: <BsTruck />,
        title: "Livraison en 24h"
    },
    {
        img: <IoCallOutline />,
        title: "33 000 00 00 "
    },
];

export const serviceImg = [
    {
        link: "produits/hommes",
        title: "Hommes",
        img: homme,
    },
    {
        link: "produits/femmes",
        title: "Femmes",
        img: femme,
    },
    {
        link: "produits/enfants",
        title: "Enfants",
        img: enfant,
    },
    {
        link: "produits/equipement",
        title: "Equipements",
        img: equipement,
    },
    {
        link: "produits/parking",
        title: "Parking",
        img: parking,
    },
];

export const prod = [
    {
        link: "produits/hommes/crown",
        img: garçon,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/chaussure",
        img: chaussure,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/parfum",
        img: parfum,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/hommes/parfum1",
        img: parfum1,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/hommes/sacFille",
        img: sacFille,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/hommes/parfumFemme",
        img: parfumFemme,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/hommes/coca",
        img: cocacola,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/ceinture",
        img: ceinture,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/hommes/bote",
        img: bote,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/hommes/montre",
        img: montre,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/hommes/storie",
        img: storie,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        link: "produits/hommes//nike",
        img: nike,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
];
export const temoignage = [
    {
        img: quote,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing",
        imgtest: elipse,
        nom: "Jane Cooper"
    },
    {
        img: quote,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing",
        imgtest: elipse,
        nom: "Jane Cooper"
    },
    {
        img: quote,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing",
        imgtest: elipse,
        nom: "Jane Cooper"
    },

];

export const crown = [
    {
        img: container
    },
    {
        img: container
    },
    {
        img: container
    },
];
export const similaire = [
    {
        img: bote,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        img: montre,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        img: storie,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
    {
        img: nike,
        title: "Cotton shirt regular fit",
        texte: "150 000 fca"
    },
];
export const side = [
    {
          name: "Mon Profil",
          icon: <BiUser />,
          lien: "/profil",
      
    },
  
    {
        name: "Mes Commande",
        icon: <ImFolderUpload />,
        lien: "/command",
    
  },
    
  {
    name: "Mon Panier",
    icon: <AiOutlineShoppingCart />,
    lien: "/panier",

},
{
    name: "Mes Favoris",
    icon: <AiOutlineHeart />,
    lien: "/favoris",

},
  ];