import { useTranslation } from 'react-i18next';

function Lab1() {
  const { t } = useTranslation();

  return (
    <div className='w-full min-w-0 p-3 sm:p-4 rounded-xl bg-[#013E37] border-4 sm:border-6 border-emerald-950 text-[#FFEFB3] text-base sm:text-lg md:text-xl lg:text-2xl shadow-[4px_4px_6px_0_rgba(0,0,0,0.6)] sm:shadow-[8px_8px_8px_0_rgba(0,0,0,0.8)] flex flex-col sm:flex-row justify-between'>
      <h3 className='sm:w-1/2 text-xl sm:text-2xl lg:text-3xl font-bold wrap-break-words'>{t('lab1.task')}</h3>
      <div className='h-px sm:h-auto my-3 sm:w-px sm:mx-5 bg-[#FFEFB3]'></div>
      <a href='https://github.com/users/zavnavi22/packages/container/package/itmo-component-lab' className='sm:w-1/2 min-w-0 border-2 border-[#FFEFB3] px-2 py-2 rounded-xl flex flex-col justify-center text-center text-sm sm:text-base lg:text-lg text-[#E0E0E0] transition-colors duration-300 hover:text-[#868686] wrap-break-words'>{t('lab1.result')}</a>
    </div>
  );
}

export default Lab1;