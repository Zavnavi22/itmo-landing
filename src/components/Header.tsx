import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <div className='p-4 mx-auto my-10 rounded-xl bg-[#013E37] border-6 border-emerald-950 text-[#FFEFB3] text-2xl shadow-xl flex justify-between'>
      <h1 className='w-1/3 text-5xl font-bold'>{t('header.name')}</h1>
      <div className='w-px h-hull bg-[#FFEFB3]'></div>
      <p className='w-1/3 border-2 rounded-xl flex items-center text-center'>{t('header.landing')}</p>
    </div>
  )
}

export default Header