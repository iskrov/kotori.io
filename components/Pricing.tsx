import { useSiteConfig } from '../hooks/useSiteConfig';

export function Pricing() {
  const { config, loading, error } = useSiteConfig();

  if (loading) {
    return (
      <section className="py-24 bg-gray-50 dark:bg-gray-800" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 mb-6 animate-pulse" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-96 animate-pulse" />
        </div>
      </section>
    );
  }

  if (error || !config) return null;
  const { pricing, branding } = config;
  if (!pricing) return null;

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{pricing.headline}</h2>
          {pricing.subheadline && (
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-3">{pricing.subheadline}</p>
          )}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.plans.map((plan, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-200 dark:border-gray-800 p-8 bg-white dark:bg-gray-900">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
              <div className="text-2xl font-bold mb-6" style={{ color: branding.colors.primary }}>{plan.priceText}</div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300">• {f}</li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-lg text-white font-semibold" style={{ backgroundColor: branding.colors.primary }}>{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


