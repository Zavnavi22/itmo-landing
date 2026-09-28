import { useTranslation } from 'react-i18next';

function Lab1() {
  const { t } = useTranslation();

  return (
    <div className='p-4 my-10 rounded-xl bg-[#013E37] border-6 border-emerald-950 text-[#FFEFB3] text-2xl shadow-xl flex flex-col gap-5'>
      <h3 className='text-3xl font-bold'>{t('lab1.task')}</h3>
      <div className='w-full h-px bg-[#FFEFB3]'></div>
      <a href='https://github.com/users/zavnavi22/packages/container/package/itmo-component-lab' className='border-2 border-[#FFEFB3] py-2 rounded-xl text-center text-[#E0E0E0] transition-colors duration-300 hover:text-[#868686]'>{t('lab1.result')}</a>
    </div>
  )
}

export default Lab1