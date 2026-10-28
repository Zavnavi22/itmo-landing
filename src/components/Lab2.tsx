import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function Lab2() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div className='w-full min-w-0 p-3 sm:p-4 rounded-xl bg-[#013E37] border-4 sm:border-6 border-emerald-950 text-[#FFEFB3] text-base sm:text-lg md:text-xl lg:text-2xl shadow-[4px_4px_6px_0_rgba(0,0,0,0.6)] sm:shadow-[8px_8px_8px_0_rgba(0,0,0,0.8)] flex flex-col gap-3 sm:gap-5'>
        <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold wrap-break-words'>{t('lab2.task')}</h3>
        <div className='w-full h-px bg-[#FFEFB3]'></div>
        <a href='files/schemaLR2.drawio' download className='w-fit max-w-full text-sm sm:text-base lg:text-lg text-[#E0E0E0] transition-colors duration-300 hover:text-[#868686] wrap-break-words'>{t('lab2.download')}</a>
        <button type='button' onClick={() => setIsOpen(true)} className='group w-full max-w-45 sm:max-w-55 mx-auto rounded-lg overflow-hidden border-2 border-[#FFEFB3]/40 cursor-zoom-in transition-colors hover:border-[#FFEFB3]' aria-label={t('lab2.open')}>
          <img src='images/lr2.png' alt={t('lab2.schemaAlt')} className='block w-full h-28 sm:h-36 object-contain transition-transform duration-300 group-hover:scale-105' />
          <span className='block px-2 py-2 text-sm text-center text-[#FFEFB3]'>{t('lab2.enlarge')}</span>
        </button>
      </div>

      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6' onClick={() => setIsOpen(false)}>
          <div className='relative flex max-h-[95vh] w-fit flex-col items-center' onClick={(event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation()}>
            <button type='button' onClick={() => setIsOpen(false)} className='absolute right-2 top-2 z-10 flex size-10 items-center justify-center rounded-full bg-black/70 text-2xl text-white transition-colors hover:bg-black' aria-label={t('lab2.close')}>×</button>
            <img src='images/lr2.png' alt={t('lab2.schemaAlt')} className='max-h-[calc(95vh-80px)] max-w-full rounded-lg object-contain' />
          </div>
        </div>
      )}
    </>
  );
}

export default Lab2;