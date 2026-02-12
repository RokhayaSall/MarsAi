import { MdLocalMovies } from 'react-icons/md';
import { BsPersonArmsUp } from 'react-icons/bs';
import { GrUserExpert } from 'react-icons/gr';
import { IoBook } from 'react-icons/io5';
import { TbTargetArrow } from 'react-icons/tb';
import { IoFlashSharp } from 'react-icons/io5';
import { IoRocketSharp } from 'react-icons/io5';
import { FaAward, FaHandHoldingHeart } from 'react-icons/fa';
import { MdEventAvailable } from 'react-icons/md';

export const cardsData = [
  {
    id: 1,
    icon: MdLocalMovies,
    title: '1 MINUTE',
    text: "Format ultra-court pour maximiser l'impact créatif.",
  },
  {
    id: 2,
    icon: IoBook,
    title: 'GRATUITÉ',
    text: 'Conférences et workshops accessibles à tous.',
  },
  {
    id: 4,
    icon: BsPersonArmsUp,
    title: 'POUR TOUS',
    text: 'Professionnels, étudiants et curieux.',
  },
  {
    id: 5,
    icon: GrUserExpert,
    title: 'EXPERTISE',
    text: "Rencontrez les leaders mondiaux de l'IA.",
  },
];

export const cardsFestivalData = [
  {
    id: 1,
    icon: TbTargetArrow,
    title: "L'Humain au centre",
    text: "Mettre l'humain au cœur de la création d'œuvres générées par IA pour ne pas perdre l'émotion.",
  },
  {
    id: 2,
    icon: IoFlashSharp,
    title: 'Challenge créatif',
    text: 'Challenger la créativité des participants grâce à un format très court de 60 secondes.',
  },
  {
    id: 3,
    icon: IoRocketSharp,
    title: 'Futurs souhaitables',
    text: "Mettre à profit la puissance de l'IA pour illustrer un thème : Imaginez des futurs souhaitables.",
  },
];

export const cardsSelectionData = [
  {
    id: 1,
    title: '2 mois',
    text: 'Appel à projet',
    description: 'Candidatures ouvertes aux créateurs du monde entier.',
  },
  {
    id: 2,
    title: '50 Films',
    text: 'Sélection officielle',
    description: "Courts-métrages d'une minute retenus pour la compétition.",
  },
  {
    id: 3,
    title: 'Web & RS',
    text: 'Diffusion digitale',
    description: 'Visibilité mondiale via les réseaux et plateformes.',
  },
  {
    id: 4,
    title: 'Festival',
    text: 'Salles de cinéma',
    description: 'Projection sur grand écran pour une immersion totale.',
  },
];

export const cardsInfos = [
  {
    id: 1,
    icon: FaHandHoldingHeart,
    title: 'Le coeur du festival',
    text: "Débats engagés sur l'éthique et le futur.",
  },
  {
    id: 2,
    icon: MdLocalMovies,
    title: 'Projections',
    text: 'Films en compétition et hors-compétition sur grand écran.',
  },
  {
    id: 3,
    icon: MdEventAvailable,
    title: 'Workshops',
    text: "Scénario, création et post-prod avec des experts de l'IA.",
  },
  {
    id: 4,
    icon: FaAward,
    title: 'Remise des prix',
    text: "Cinéastes, acteurs et créateurs renommés pour récompenser l'excellence.",
  },
];

export const cardsPlaces = [
  {
    id: 1,
    title: 'Salle des sucres',
    description:
      'Futur salle des conférences et de la remise des prix de Mars.A.I. Un espace majestueux alliant patrimoine et technologie.',
  },
  {
    id: 2,
    title: 'Salle plaza',
    description:
      "L'épicentre du festival : accueil, animations, workshops et restauration. Le point de rencontre de tous les participants.",
  },
];
