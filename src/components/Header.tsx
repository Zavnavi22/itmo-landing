import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <div className='w-full p-3 sm:p-4 mb-6 sm:mb-10 bg-[#013E37] bg-[url("/textures/foliage-1.png")] bg-blend-overlay bg-contain bg-center border-b-4 sm:border-b-6 border-emerald-950 text-[#FFEFB3] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 2xl:max-w-[2560px] 2xl:mx-auto'>
      <h1 className='w-full sm:w-1/2 pt-8 sm:py-12 lg:py-16 2xl:py-24 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold wrap-break-words'>{t('header.name')}</h1>
      <div className='hidden sm:block w-px self-stretch mx-3 lg:mx-5 bg-[#FFEFB3]'></div>
      <div className='flex flex-col items-center gap-3 sm:gap-5 w-full sm:w-fit mx-auto mt-0 sm:mt-8 lg:mt-12 2xl:mt-16 text-base sm:text-lg lg:text-xl 2xl:text-2xl'>
        <p className='max-w-full px-4 sm:px-5 py-2 border-2 rounded-xl flex items-center justify-center text-center'>{t('header.landing')}</p>
      </div>
    </div>
  );
}

export default Header;