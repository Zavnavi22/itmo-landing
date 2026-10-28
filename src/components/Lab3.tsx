import { useTranslation } from 'react-i18next';
import linkIcon from '../assets/link.png';

function Lab3() {
  const { t } = useTranslation();

  return (
    <div className='w-full min-w-0 p-3 sm:p-4 rounded-xl bg-[#013E37] border-4 sm:border-6 border-emerald-950 text-[#FFEFB3] text-base sm:text-lg md:text-xl lg:text-2xl shadow-[4px_4px_6px_0_rgba(0,0,0,0.6)] sm:shadow-[8px_8px_8px_0_rgba(0,0,0,0.8)] flex flex-col gap-3 sm:gap-5'>
      <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold wrap-break-words'>{t('lab3.task')}</h3>
      <div className='w-full h-px bg-[#FFEFB3]'></div>
      <a href='labs/lab3/redos.html' className='w-full min-w-0 flex items-center justify-center sm:justify-start gap-3 sm:gap-5 px-3 sm:px-6 py-3 bg-[#FFEFB3] hover:bg-[#c1b27c] transition-colors duration-300 text-black rounded-lg'>
        <img src={linkIcon} alt={t('lab3.linkIcon')} className='w-6 h-6 sm:w-8 sm:h-8 shrink-0 object-contain' />
        <p className='min-w-0 text-sm sm:text-base lg:text-lg wrap-break-words'>{t('lab3.open')}</p>
      </a>
    </div>
  );
}

export default Lab3;