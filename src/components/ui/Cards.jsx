import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Card({ icon: Icon, title, text }) {
  const { t } = useTranslation();

  return (
    <article className="bg-white border border-[#D5DAE1] rounded-4xl p-6">
      <Icon className="text-[#ff5845] text-4xl" />
      <h3 className="font-bold text-[#282828] text-2xl mt-2">
        {title || t('cards.default_card_title')}
      </h3>
      <p className="mt-2 text-xl">{text || t('cards.default_card_text')}</p>
    </article>
  );
}

export function CardMovie({ title, director, country, duration }) {
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
        ></iframe>

        <div className="absolute top-3 left-3 flex gap-1.5 pointer-events-none">
          <span className="bg-white/20 backdrop-blur-md text-[10px] text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">
            Sora
          </span>
          <span className="bg-white/20 backdrop-blur-md text-[10px] text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">
            ChatGPT
          </span>
        </div>
      </figure>

      <figcaption className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-black text-[#282828] text-2xl uppercase tracking-tighter">
            {title || t('cards.default_movie_title')}
          </h3>
          <span className="bg-[#FFE5E5] text-[#FF5845] text-[10px] px-2 py-0.5 rounded font-black">
            {duration || t('cards.default_movie_duration')}
          </span>
        </div>

        <div className="flex justify-between items-end uppercase">
          <div>
            <p className="text-[10px] text-[#A0A0A0] font-bold tracking-widest">
              {t('cards.default_director_label')}
            </p>
            <p className="text-sm font-black text-[#282828]">
              {director || t('cards.default_director_name')}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[10px] text-[#A0A0A0] font-bold tracking-widest text-[8px]">
              {t('cards.default_country_label')}
            </p>
            <div className="flex items-center gap-1.5 justify-end">
              <Globe size={14} className="text-[#3b82f6]" />
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
      <p className="mt-5 text-xl text-[#b4bfce] w-full">{text || t('cards.default_festival_text')}</p>
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
      <p className="mt-2 font-semibold w-full">{text || t('cards.default_selection_text')}</p>
      <p className="mt-2 font-semibold text-[#64748B] w-full">{description || t('cards.default_selection_description')}</p>
    </article>
  );
}