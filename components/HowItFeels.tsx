import { Mic, Sparkles, Share2 } from 'lucide-react';
import { useSiteConfig } from '../hooks/useSiteConfig';

export function HowItFeels() {
  const { config, loading, error } = useSiteConfig();
  if (loading || error || !config || !config.howItFeels) return null;
  const { howItFeels, branding } = config;

  const stepIcons = [Mic, Sparkles, Share2];
  const stepNumbers = ['1', '2', '3'];
  const stepColors = [
    'from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20',
    'from-blue-100 to-teal-100 dark:from-blue-900/20 dark:to-teal-900/20', 
    'from-teal-100 to-green-100 dark:from-teal-900/20 dark:to-green-900/20'
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900 dark:to-gray-900" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{howItFeels.headline}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Simple enough for daily use, powerful enough to make a difference
          </p>
        </div>
        
        {/* Desktop timeline */}
        <div className="hidden md:block relative mb-16">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700 transform -translate-y-1/2"></div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {howItFeels.steps.map((step, idx) => {
              const Icon = stepIcons[idx];
              return (
                <div key={idx} className="relative">
                  <div className={`bg-gradient-to-br ${stepColors[idx]} rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-white/50 dark:border-gray-800/50`}>
                    {/* Step number badge */}
                    <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center">
                      <span className="text-lg font-bold" style={{ color: branding.colors.primary }}>
                        {stepNumbers[idx]}
                      </span>
                    </div>
                    
                    {/* Icon */}
                    <div className="mb-6 pt-2">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                        style={{ 
                          backgroundColor: `${branding.colors.primary}15`,
                        }}
                      >
                        <Icon className="h-7 w-7" style={{ color: branding.colors.primary }} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Example text */}
                    {idx === 0 && (
                      <div className="mt-4 p-3 bg-white/60 dark:bg-gray-800/60 rounded-xl">
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                          "Had a tough morning drop-off, lots of tears..."
                        </p>
                      </div>
                    )}
                    {idx === 1 && (
                      <div className="mt-4 p-3 bg-white/60 dark:bg-gray-800/60 rounded-xl">
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                          Tagged: #transitions #morning-routine
                        </p>
                      </div>
                    )}
                    {idx === 2 && (
                      <div className="mt-4 p-3 bg-white/60 dark:bg-gray-800/60 rounded-xl">
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                          Share link created (view-only, expires in 7 days)
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile version - vertical layout */}
        <div className="md:hidden space-y-6">
          {howItFeels.steps.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div key={idx} className={`bg-gradient-to-br ${stepColors[idx]} rounded-2xl p-6 shadow-sm relative`}>
                {/* Step number */}
                <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center">
                  <span className="font-bold" style={{ color: branding.colors.primary }}>
                    {stepNumbers[idx]}
                  </span>
                </div>
                
                <div className="flex items-start gap-4 mt-2">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${branding.colors.primary}15` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: branding.colors.primary }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            No complex setup. No overwhelming features. Just simple, effective journaling.
          </p>
          <a 
            href="#final-cta"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl border-2 hover:shadow-md transition-all"
            style={{ 
              borderColor: branding.colors.primary,
              color: branding.colors.primary 
            }}
          >
            Get started today
          </a>
        </div>
      </div>
    </section>
  );
}






