import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className='p-4 mx-auto rounded-xl bg-[#013E37] bg-[url("/textures/stone-1.png")] bg-blend-overlay border-6 border-emerald-950 text-[#FFEFB3] shadow-[8px_8px_8px_0_rgba(0,0,0,0.8)]'>
      <h2 className='font-bold text-4xl mb-4'>{t('about.header')}</h2>
      <ul className='list-disc list-inside text-2xl'>
        <li>{t('about.year')}</li>
        <li>{t('about.program')}</li>
        <li>{t('about.group')}</li>
        <li>{t('about.department')}</li>
        <li>{t('about.bachelor')}</li>
      </ul>
    </div>
  )
}

export default About