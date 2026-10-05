import { useTranslation } from 'react-i18next';

function Lab2() {
  const { t } = useTranslation();

  return (
    <div className='p-4 rounded-xl bg-[#013E37] border-6 border-emerald-950 text-[#FFEFB3] text-2xl shadow-[8px_8px_8px_0_rgba(0,0,0,0.8)] flex flex-col gap-5'>
      <h3 className='text-3xl font-bold'>{t('lab2.task')}</h3>
      <div className='w-full h-px bg-[#FFEFB3]'></div>
      <a href="files/schemaLR2.drawio" download className="text-[#E0E0E0] transition-colors duration-300 hover:text-[#868686]">{t('lab2.download')}</a>
      <img src="images/lr2.png" alt="Схема второй ЛР" />
    </div>
  )
}

export default Lab2