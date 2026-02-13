import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { MdEvent } from 'react-icons/md';

export function Card({ icon: Icon, title, text, className }) {
  const { t } = useTranslation();

  return (
    <article
      className={`bg-white border border-[#D5DAE1] rounded-4xl p-6 ${className}`}
    >
      <Icon className="text-[#ff5845] text-4xl" />
      <h3 className="font-bold text-[#282828] text-2xl mt-2">
        {title || t('cards.default_card_title')}
      </h3>
      <p className="mt-2 text-xl">{text || t('cards.default_card_text')}</p>
    </article>
  );
}

export function CardMovie({ title, director, country }) {
  const { t } = useTranslation();

  return (
    <article className="bg-[#F8F9FA] rounded-3xl overflow-hidden shadow-sm border border-gray-100">
      <figure className="relative aspect-video w-full">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/4xq6bVbS-Pw?si=_twkdKn70p1y1UV-"
          title={title || t('cards.default_movie_title')}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          aria-label="Vidéo youtube du film"
        ></iframe>
      </figure>

      <figcaption className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-black text-[#282828] text-2xl uppercase tracking-tighter">
            {title || t('cards.default_movie_title')}
          </h3>
        </div>
        <div className="flex justify-between items-end uppercase">
          <div>
            <p className="text-sm text-[#6B6B6B] font-semibold tracking-widest">
              {t('cards.default_director_label')}
            </p>
            <p className="text-sm font-black text-[#282828]">
              {director || t('cards.default_director_name')}
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-[#6B6B6B] font-semibold tracking-widest">
              {t('cards.default_country_label')}
            </p>
            <div className="flex items-center gap-1.5 justify-end">
              <Globe
                size={14}
                className="text-[#3b82f6]"
                aria-label="Icone de globe"
              />
              <p className="text-sm font-black text-[#282828]">
                {country || t('cards.default_country_name')}
              </p>
            </div>
          </div>
        </div>
      </figcaption>
    </article>
  );
}

export function CardFestival({ icon: Icon, title, text }) {
  const { t } = useTranslation();

  return (
    <article className="bg-[#333333] border border-[#626262] rounded-4xl p-8">
      <Icon className="text-[#ff5845] text-5xl" />
      <h3 className="font-bold text-white text-2xl mt-2 uppercase w-full">
        {title || t('cards.default_festival_title')}
      </h3>
      <p className="mt-5 text-xl text-[#b4bfce] w-full">
        {text || t('cards.default_festival_text')}
      </p>
    </article>
  );
}

export function CardSelection({ title, text, description }) {
  const { t } = useTranslation();

  return (
    <article className="bg-white border border-[#D5DAE1] rounded-4xl p-8">
      <h3 className="font-bold text-[#246BAD] text-2xl uppercase w-full">
        {title || t('cards.default_selection_title')}
      </h3>
      <p className="mt-2 font-semibold w-full">
        {text || t('cards.default_selection_text')}
      </p>
      <p className="mt-2 font-semibold text-[#64748B] w-full">
        {description || t('cards.default_selection_description')}
      </p>
    </article>
  );
}

export function CardCalender() {
  return (
    <article className="bg-[#F8F9FA] border border-[#D5DAE1] rounded-4xl py-15 text-center md:p-20 md:px-16">
      <MdEvent className="text-[#246BAD] text-5xl text-center mx-auto" />
      <h3 className="font-bold text-[#282828] text-4xl mt-2 uppercase ">
        13 Juin
      </h3>
      <p className="mt-2 font-bold text-[#282828]  uppercase">
        à partir de 19h
      </p>
      <button
        className="bg-[#2b71b1] text-white rounded-xl mt-6 p-3 font-bold uppercase text-base cursor-pointer md:p-2 md:px-5 md:text-sm"
        to="/gallery"
      >
        Prendre mon pass
      </button>
    </article>
  );
}

export function CardPlace() {
  return (
    <article className="relative bg-[url(src/assets/port-marseille.jpg)] bg-cover bg-center bg-gray-400 bg-blend-multiply rounded-4xl p-10 pt-60 flex flex-col ">
      <p className="text-white text-xl font-semibold mb-3 uppercase text-shadow-lg/90 md:w-100">
        Marseille, France
      </p>
      <h2 className="text-white font-bold text-3xl text-shadow-lg/90  uppercase w-60 md:text-4xl md:w-full">
        Centre Événementiel La Plateforme
      </h2>
    </article>
  );
}

export function CardPartner({ src, alt }) {
  return (
    <li className="bg-white border border-[#D5DAE1] rounded-4xl p-6 flex justify-center md:items-center aspect-square ">
      <img
        className="hover:grayscale duration-600 object-contain"
        src={src}
        alt={alt}
      />
    </li>
  );
}
