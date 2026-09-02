import {
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Target,
  Rocket,
  ChevronDown,
  Settings,
  BarChart2,
} from 'lucide-react'

interface QuestionsFrequentesProps {
  titre?: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

const QUESTIONSFREQUENTES_DEFAULTS = {
  titre: 'Questions fréquentes',
  faqs: [
    {
      question: 'Combien de temps dure le sprint ?',
      answer:
        'Le sprint dure généralement entre 4 et 6 semaines selon la complexité de votre acquisition et vos objectifs. Nous travaillons de manière intensive pour vous fournir un système opérationnel le plus rapidement possible.',
    },
    {
      question: 'Quels types d\'entreprises accompagnez-vous ?',
      answer:
        'Nous accompagnons principalement les startups B2B, les SaaS, les agences et les PME tech qui souhaitent structurer et automatiser leur acquisition. Le sprint est particulièrement adapté aux entreprises en phase de croissance.',
    },
    {
      question: 'Quels outils utilisez-vous ?',
      answer:
        'Nous adaptons les outils à votre situation et votre budget. Nous travaillons avec les principaux outils du marché : Apollo, Lemlist, La Growth Machine, HubSpot, Pipedrive, et bien d\'autres selon vos besoins.',
    },
    {
      question: 'Quels résultats peut-on espérer ?',
      answer:
        'Les résultats dépendent de votre marché, de votre offre et de la qualité de votre ICP. Les clients qui suivent le processus complet constatent une réduction de leur coût par lead et une augmentation du volume de prospects qualifiés, généralement visible à partir du deuxième mois après le sprint.',
    },
    {
      question: 'Y a-t-il un suivi après le sprint ?',
      answer:
        'Oui, nous assurons un suivi post-sprint avec des sessions de revue de performance. Des offres d\'accompagnement continu sont disponibles pour les entreprises souhaitant aller plus loin.',
    },
  ],
};

export default function QuestionsFrequentes(props: QuestionsFrequentesProps = {}) {
  const { titre, faqs } = { ...QUESTIONSFREQUENTES_DEFAULTS, ...props } as typeof QUESTIONSFREQUENTES_DEFAULTS;

  return (
    <section className="py-20">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {titre}
                  </h2>
                </div>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="group rounded-xl border border-zinc-800/60 bg-zinc-900/40 overflow-hidden"
                    >
                      <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none hover:bg-zinc-800/20 transition-colors duration-200">
                        <h3 className="text-sm font-semibold text-white pr-4 leading-snug">
                          {faq.question}
                        </h3>
                        <ChevronDown className="w-4 h-4 text-zinc-500 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                      </summary>
                      <div className="px-6 pt-1 pb-6">
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </section>
  )
}