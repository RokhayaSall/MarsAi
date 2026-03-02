import { MdLocalMovies, MdEventAvailable } from 'react-icons/md';
import { BsPersonArmsUp } from 'react-icons/bs';
import { GrUserExpert } from 'react-icons/gr';
import { IoBook, IoFlashSharp, IoRocketSharp } from 'react-icons/io5';
import { TbTargetArrow } from 'react-icons/tb';
import { FaAward, FaHandHoldingHeart, FaGlobe } from 'react-icons/fa';
import { GiFilmSpool } from 'react-icons/gi';
import { useTranslation } from 'react-i18next';

const images = import.meta.glob('../../assets/*.{png,jpg,jpeg,svg}', {
  eager: true,
});

export const useCardsData = () => {
  const { t } = useTranslation();

  const cardsData = [
    { id: 1, icon: MdLocalMovies, title: t('cards.general.minute.title'), text: t('cards.general.minute.text') },
    { id: 2, icon: IoBook, title: t('cards.general.gratuit.title'), text: t('cards.general.gratuit.text') },
    { id: 3, icon: BsPersonArmsUp, title: t('cards.general.pourTous.title'), text: t('cards.general.pourTous.text') },
    { id: 4, icon: GrUserExpert, title: t('cards.general.expertise.title'), text: t('cards.general.expertise.text') },
  ];

  const cardsFestivalData = [
    { id: 1, icon: TbTargetArrow, title: t('cards.festival.humain.title'), text: t('cards.festival.humain.text') },
    { id: 2, icon: IoFlashSharp, title: t('cards.festival.challenge.title'), text: t('cards.festival.challenge.text') },
    { id: 3, icon: IoRocketSharp, title: t('cards.festival.futurs.title'), text: t('cards.festival.futurs.text') },
  ];

  const cardsSelectionData = [
    { id: 1, title: t('cards.selection.2mois.title'), text: t('cards.selection.2mois.text'), description: t('cards.selection.2mois.description') },
    { id: 2, title: t('cards.selection.50films.title'), text: t('cards.selection.50films.text'), description: t('cards.selection.50films.description') },
    { id: 3, title: t('cards.selection.web.title'), text: t('cards.selection.web.text'), description: t('cards.selection.web.description') },
    { id: 4, title: t('cards.selection.festival.title'), text: t('cards.selection.festival.text'), description: t('cards.selection.festival.description') },
  ];

  const cardsInfos = [
    { id: 1, icon: FaHandHoldingHeart, title: t('cards.infos.coeur.title'), text: t('cards.infos.coeur.text') },
    { id: 2, icon: MdLocalMovies, title: t('cards.infos.projections.title'), text: t('cards.infos.projections.text') },
    { id: 3, icon: MdEventAvailable, title: t('cards.infos.workshops.title'), text: t('cards.infos.workshops.text') },
    { id: 4, icon: FaAward, title: t('cards.infos.prix.title'), text: t('cards.infos.prix.text') },
  ];

  const cardsPlaces = [
    { id: 1, title: t('cards.places.sucres.title'), description: t('cards.places.sucres.description') },
    { id: 2, title: t('cards.places.plaza.title'), description: t('cards.places.plaza.description') },
  ];

  const cardsNumber = [
    { id: 1, icon: FaGlobe, title: t('cards.numbers.pays.title'), text: t('cards.numbers.pays.text') },
    { id: 2, icon: GiFilmSpool, title: t('cards.numbers.films.title'), text: t('cards.numbers.films.text') },
  ];

  const cardsPartner = [
    { id: 1, src: images['../../assets/plateforme.png'].default, alt: 'Logo la plateforme' },
    { id: 2, src: images['../../assets/mobile.png'].default, alt: 'Logo mobile festival' },
    { id: 3, src: images['../../assets/undp.png'].default, alt: 'Logo undp' },
    { id: 4, src: images['../../assets/psl.png'].default, alt: 'Logo psl' },
    { id: 5, src: images['../../assets/cnc.png'].default, alt: 'Logo cnc' },
    { id: 6, src: images['../../assets/action.png'].default, alt: 'Logo action campaign' },
    { id: 7, src: images['../../assets/unric.png'].default, alt: 'Logo unric' },
    { id: 8, src: images['../../assets/sacd.png'].default, alt: 'Logo sacd' },
    { id: 9, src: images['../../assets/agence.png'].default, alt: "Logo l'agence du court métrage" },
    { id: 10, src: images['../../assets/extra.png'].default, alt: 'Logo extra court' },
    { id: 11, src: images['../../assets/unesco.jpg'].default, alt: 'Logo unesco' },
    { id: 12, src: images['../../assets/global.png'].default, alt: 'Logo global youth biodiversity network' },
  ];

  return {
    cardsData,
    cardsFestivalData,
    cardsSelectionData,
    cardsInfos,
    cardsPlaces,
    cardsNumber,
    cardsPartner,
  };
};