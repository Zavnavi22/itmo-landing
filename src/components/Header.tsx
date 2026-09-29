import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <div className='p-4 mb-10 bg-[#013E37] bg-[url("/textures/foliage-1.png")] bg-blend-overlay bg-contain border-b-6 border-emerald-950 text-[#FFEFB3] text-2xl flex justify-between'>
      <h1 className='w-1/2 py-20 text-center text-5xl font-bold'>{t('header.name')}</h1>
      <div className='w-px h-hull mx-5 bg-[#FFEFB3]'></div>
      <p className='w-fit my-20 mx-auto px-5 border-2 rounded-xl flex items-center'>{t('header.landing')}</p>
    </div>
  )
}

export default Header