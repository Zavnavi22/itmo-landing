import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const SECTIONS = [
  { title: 'analysis.about',          text: 'analysis.text1' },
  { title: 'analysis.problem',        text: 'analysis.text2' },
  { title: 'analysis.methods',        text: 'analysis.text3' },
  { title: 'analysis.innovativeness', text: 'analysis.text4' },
  { title: 'analysis.restrictions',   text: 'analysis.text5' },
  { title: 'analysis.result',         text: 'analysis.text6' },
];

function ArticleAnalysis() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const total = SECTIONS.length;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(total - 1, i + 1));

  return (
    <div className='p-4 rounded-xl bg-[#774D31] bg-[url("/textures/leather-1.png")] bg-blend-overlay bg-contain border-6 border-yellow-950 text-[#FFEFB3] text-2xl shadow-[8px_8px_8px_0_rgba(0,0,0,0.8)] flex flex-col gap-5'>
      <h3 className='text-2xl font-bold'>{t('analysis.task')}</h3>
      <div className='w-full h-px bg-[#FFEFB3]'></div>
      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SECTIONS.map(({ title, text }) => (
            <div key={title} className='w-full shrink-0'>
              <h4 className='text-xl font-bold mb-3'>{t(title)}</h4>
              <p className='text-lg'>{t(text)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <button
          onClick={prev}
          disabled={index === 0}
          className='px-3 rounded-md border-2 border-yellow-950 bg-[#5c3a24] hover:bg-[#6b452b] disabled:opacity-40 disabled:cursor-not-allowed transition-colors'
          aria-label={t('analysis.prev', 'Назад')}
        >
          ←
        </button>
        <span className='text-lg font-bold tabular-nums'>
          {index + 1} / {total}
        </span>
        <button
          onClick={next}
          disabled={index === total - 1}
          className='px-3 rounded-md border-2 border-yellow-950 bg-[#5c3a24] hover:bg-[#6b452b] disabled:opacity-40 disabled:cursor-not-allowed transition-colors'
          aria-label={t('analysis.next', 'Вперёд')}
        >
          →
        </button>
      </div>
    </div>
  )
}

export default ArticleAnalysis