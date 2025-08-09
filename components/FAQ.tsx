import { useSiteConfig } from '../hooks/useSiteConfig';

export function FAQ() {
  const { config, loading, error } = useSiteConfig();

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-br from-gray-50/50 to-kotori-pastelLavender/20 dark:bg-gray-900" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 mb-6 animate-pulse" />
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  if (error || !config) return null;
  const { faq, branding } = config;
  if (!faq) return null;

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50/50 to-kotori-pastelLavender/20 dark:bg-gray-900" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{faq.headline}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Everything you need to know about Kotori</p>
        </div>
        
        <div className="space-y-4">
          {faq.items.map((item, idx) => (
            <details key={idx} className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 dark:border-gray-700/50 overflow-hidden">
              <summary className="cursor-pointer list-none flex justify-between items-center p-6 hover:bg-white/60 dark:hover:bg-gray-800/60 transition-colors">
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">{item.q}</span>
                <div className="flex-shrink-0">
                  <span 
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-medium group-open:rotate-180 transition-transform duration-200"
                    style={{ backgroundColor: branding.colors.primary }}
                  >
                    ▾
                  </span>
                </div>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Have more questions?</p>
          <a 
            href="mailto:hello@kotori.io" 
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-xl hover:shadow-lg transition-shadow"
            style={{ backgroundColor: branding.colors.primary }}
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}


