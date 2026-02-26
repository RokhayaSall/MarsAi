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
    { id: 1, icon: MdLocalMovies, title: t('cards.home.minute.title'), text: t('cards.home.minute.text') },
    { id: 2, icon: IoBook, title: t('cards.home.free.title'), text: t('cards.home.free.text') },
    { id: 4, icon: BsPersonArmsUp, title: t('cards.home.forAll.title'), text: t('cards.home.forAll.text') },
    { id: 5, icon: GrUserExpert, title: t('cards.home.expertise.title'), text: t('cards.home.expertise.text') },
  ];

  const cardsFestivalData = [
    { id: 1, icon: TbTargetArrow, title: t('cards.festival.human.title'), text: t('cards.festival.human.text') },
    { id: 2, icon: IoFlashSharp, title: t('cards.festival.challenge.title'), text: t('cards.festival.challenge.text') },
    { id: 3, icon: IoRocketSharp, title: t('cards.festival.future.title'), text: t('cards.festival.future.text') },
  ];

  const cardsSelectionData = [
    { id: 1, title: t('cards.selection.call.title'), text: t('cards.selection.call.text'), description: t('cards.selection.call.description') },
    { id: 2, title: t('cards.selection.official.title'), text: t('cards.selection.official.text'), description: t('cards.selection.official.description') },
    { id: 3, title: t('cards.selection.digital.title'), text: t('cards.selection.digital.text'), description: t('cards.selection.digital.description') },
    { id: 4, title: t('cards.selection.cinema.title'), text: t('cards.selection.cinema.text'), description: t('cards.selection.cinema.description') },
  ];

  const cardsInfos = [
    { id: 1, icon: FaHandHoldingHeart, title: t('cards.infos.heart.title'), text: t('cards.infos.heart.text') },
    { id: 2, icon: MdLocalMovies, title: t('cards.infos.screening.title'), text: t('cards.infos.screening.text') },
    { id: 3, icon: MdEventAvailable, title: t('cards.infos.workshop.title'), text: t('cards.infos.workshop.text') },
    { id: 4, icon: FaAward, title: t('cards.infos.award.title'), text: t('cards.infos.award.text') },
  ];

  const cardsPlaces = [
    { id: 1, title: t('cards.places.sucres.title'), description: t('cards.places.sucres.description') },
    { id: 2, title: t('cards.places.plaza.title'), description: t('cards.places.plaza.description') },
  ];

  const cardsNumber = [
    { id: 1, icon: FaGlobe, title: '+120', text: t('cards.numbers.countries') },
    { id: 2, icon: GiFilmSpool, title: '+600', text: t('cards.numbers.films') },
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