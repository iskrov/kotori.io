import { useSiteConfig } from '../hooks/useSiteConfig';

export function Languages() {
  const { config, loading, error } = useSiteConfig();
  if (loading || error || !config || !config.languages) return null;
  const { languages, branding } = config;

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800" id="languages">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{languages.headline}</h2>
          {languages.note && (
            <p className="text-gray-600 dark:text-gray-300 mt-3">{languages.note}</p>
          )}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {languages.items.map((lang, idx) => (
            <div key={idx} className="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
              <span className="font-medium" style={{ color: branding.colors.text }}>{lang}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}






