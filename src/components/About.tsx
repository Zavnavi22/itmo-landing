import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className='p-4 mx-auto rounded-xl bg-[#013E37] border-6 border-emerald-950 text-[#FFEFB3] shadow-xl'>
      <h2 className='font-bold text-4xl mb-4'>{t('about.header')}</h2>
      <ul className='list-disc list-inside text-2xl'>
        <li>{t('about.year')}</li>
        <li>{t('about.program')}</li>
        <li>{t('about.bachelor')}</li>
      </ul>
    </div>
  )
}

export default About