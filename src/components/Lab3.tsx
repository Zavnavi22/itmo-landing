import { useTranslation } from 'react-i18next';
import linkIcon from '../assets/link.png';

function Lab3() {
  const { t } = useTranslation();

  return (
    <div className='p-4 rounded-xl bg-[#013E37] border-6 border-emerald-950 text-[#FFEFB3] text-2xl shadow-[8px_8px_8px_0_rgba(0,0,0,0.8)] flex flex-col gap-5'>
        <h3 className='text-3xl font-bold'>{t('lab3.task')}</h3>
        <div className='w-full h-px bg-[#FFEFB3]'></div>
        <a href="labs/lab3/redos.html" className="flex items-center gap-5 px-6 py-3 bg-[#FFEFB3] hover:bg-[#c1b27c] transition-colors duration-300 text-black rounded-lg">
            <img src={linkIcon} alt="LinkIcon" className="h-8" />
            <p>{t('lab3.open')}</p>
        </a>
    </div>
  )
}

export default Lab3