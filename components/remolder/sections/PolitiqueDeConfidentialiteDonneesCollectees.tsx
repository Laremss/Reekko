import React from 'react';

interface DonneesCollecteesProps {
  title?: string;
  formSectionTitle?: string;
  formSectionContent?: string;
  analyticsSectionTitle?: string;
  analyticsMainContent?: string;
  analyticsFooterContent?: string;
  googlePrivacyLink?: string;
  googlePrivacyLinkLabel?: string;
}

const DONNEESCOLLECTEES_DEFAULTS = {
  title: '1. Données collectées',
  formSectionTitle: 'Formulaire de contact',
  formSectionContent: 'Lorsque vous remplissez le formulaire de contact, nous collectons : nom, adresse email, nom de l\'entreprise, rôle et contenu du message. Ces données sont transmises via Formspree et sont utilisées uniquement pour répondre à votre demande.',
  analyticsSectionTitle: 'Données de navigation (Google Analytics)',
  analyticsMainContent: 'Ce site utilise Google Analytics 4 (Google LLC) pour mesurer l\'audience. Google Analytics collecte des données anonymisées sur votre navigation : pages visitées, durée de session, source de trafic, type d\'appareil. Ces données sont agrégées et ne permettent pas de vous identifier personnellement. Conformément à notre configuration, les adresses IP sont anonymisées.',
  analyticsFooterContent: 'Pour en savoir plus :',
  googlePrivacyLink: 'https://policies.google.com/privacy',
  googlePrivacyLinkLabel: 'politique de confidentialité de Google',
};

export default function DonneesCollectees(props: DonneesCollecteesProps = {}) {
  const {
    title,
    formSectionTitle,
    formSectionContent,
    analyticsSectionTitle,
    analyticsMainContent,
    analyticsFooterContent,
    googlePrivacyLink,
    googlePrivacyLinkLabel,
  } = { ...DONNEESCOLLECTEES_DEFAULTS, ...props } as typeof DONNEESCOLLECTEES_DEFAULTS;

  return (
    <section>
      <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
        {title}
      </h2>
      <div className="space-y-5">
        <div>
          <h3 className="text-sm font-semibold text-zinc-300 mb-2">{formSectionTitle}</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {formSectionContent}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-zinc-300 mb-2">{analyticsSectionTitle}</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {analyticsMainContent}
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed mt-2">
            {analyticsFooterContent}{' '}
            <a href={googlePrivacyLink} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              {googlePrivacyLinkLabel}
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}