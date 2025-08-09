import { Shield, Lock, KeyRound } from 'lucide-react';
import { useSiteConfig } from '../hooks/useSiteConfig';

export function Security() {
  const { config, loading, error } = useSiteConfig();

  if (loading) {
    return (
      <section className="py-24 bg-white dark:bg-gray-900" id="security">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 mb-6 animate-pulse" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-96 animate-pulse" />
        </div>
      </section>
    );
  }

  if (error || !config) return null;

  const { security, branding } = config;
  if (!security) return null;

  return (
    <section className="py-24 bg-white dark:bg-gray-900" id="security">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{security.headline}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {security.items.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${branding.colors.primary}10` }}>
                {idx === 0 && <Shield className="h-5 w-5" style={{ color: branding.colors.primary }} />}
                {idx === 1 && <Lock className="h-5 w-5" style={{ color: branding.colors.primary }} />}
                {idx === 2 && <KeyRound className="h-5 w-5" style={{ color: branding.colors.primary }} />}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


