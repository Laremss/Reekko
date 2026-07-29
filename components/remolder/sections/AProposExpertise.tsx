interface ExpertiseProps {
  title?: string;
  description?: string;
  skills?: string[];
}

const EXPERTISE_DEFAULTS = {
  title: 'Notre expertise',
  description: 'Les domaines dans lesquels on excelle pour faire croître votre acquisition.',
  skills: [
    'Growth Marketing',
    'Marketing Automation',
    'Outbound Sales',
    'LinkedIn Prospecting',
    'Email Marketing',
    'Lead Generation',
    'CRM & Pipelines',
    'Analytics & Tracking',
    'Copywriting',
    'A/B Testing',
  ],
};

export default function Expertise(props: ExpertiseProps = {}) {
  const { title, description, skills } = { ...EXPERTISE_DEFAULTS, ...props } as typeof EXPERTISE_DEFAULTS;

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-zinc-400">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full border border-zinc-700/50 bg-zinc-800/30 text-zinc-300 text-sm font-medium hover:border-indigo-500/30 hover:text-indigo-300 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}