import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className='w-full p-3 sm:p-4 mx-auto rounded-xl bg-[#013E37] bg-[url("/textures/stone-1.png")] bg-blend-overlay bg-cover border-4 sm:border-6 border-emerald-950 text-[#FFEFB3] shadow-[4px_4px_6px_0_rgba(0,0,0,0.6)] sm:shadow-[8px_8px_8px_0_rgba(0,0,0,0.8)]'>
      <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 break-words'>{t('about.header')}</h2>
      <ul className='list-disc list-inside text-base sm:text-lg md:text-xl lg:text-2xl space-y-1 sm:space-y-2 break-words'>
        <li>{t('about.year')}</li>
        <li>{t('about.program')}</li>
        <li>{t('about.group')}</li>
        <li>{t('about.department')}</li>
        <li>{t('about.bachelor')}</li>
      </ul>
    </div>
  );
}

export default About;