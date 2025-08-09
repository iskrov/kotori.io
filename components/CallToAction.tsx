import { ArrowRight, CheckCircle } from 'lucide-react';
import { useSiteConfig } from '../hooks/useSiteConfig';

export function CallToAction() {
  const { config, loading, error } = useSiteConfig();

  if (loading) {
    return (
      <section className="py-24 bg-gray-50 dark:bg-gray-800" id="final-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded mb-6 mx-auto max-w-lg"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-8 mx-auto max-w-md"></div>
            <div className="flex justify-center gap-4 mb-8">
              <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !config) {
    return (
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Unable to load call-to-action configuration.
          </p>
        </div>
      </section>
    );
  }

  const { callToAction, branding } = config;

  return (
    <section className="py-24 bg-gradient-to-br from-kotori-pastelLavender/30 to-kotori-pastelLavender/60 dark:from-gray-800 dark:to-gray-900" id="final-cta">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {callToAction.headline}
        </h2>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
          {callToAction.description}
        </p>
        
        {/* Feature grid with better visual hierarchy */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 mb-10 shadow-lg border border-white/50 dark:border-gray-700/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3 text-left">
              <div className="mt-1">
                <CheckCircle className="h-5 w-5" style={{ color: branding.colors.primary }} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Voice-enabled</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Hands-free capture anytime</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <div className="mt-1">
                <CheckCircle className="h-5 w-5" style={{ color: branding.colors.primary }} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Multi-language</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Record & share in any language</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <div className="mt-1">
                <CheckCircle className="h-5 w-5" style={{ color: branding.colors.primary }} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Eyes-free</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">No screens, no distractions</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <div className="mt-1">
                <CheckCircle className="h-5 w-5" style={{ color: branding.colors.primary }} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Secure sharing</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Read-only access you control</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <div className="mt-1">
                <CheckCircle className="h-5 w-5" style={{ color: branding.colors.primary }} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Weekly summaries</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Visit-ready in one tap</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <div className="mt-1">
                <CheckCircle className="h-5 w-5" style={{ color: branding.colors.primary }} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Your data stays yours</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Private & encrypted always</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA button */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative inline-block">
            <a 
              href="https://app.kotori.io" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-3 px-12 py-5 text-lg text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 group" 
              style={{ 
                backgroundColor: branding.colors.primary,
                background: `linear-gradient(135deg, ${branding.colors.primary} 0%, ${branding.colors.primary}dd 100%)`
              }}
            >
              <span>{callToAction.cta.primary}</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-30 blur-xl pointer-events-none"
                 style={{ backgroundColor: branding.colors.primary }}></div>
          </div>
          
          {/* Limited early access badge below button */}
          {callToAction.urgency && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur rounded-full text-sm font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ backgroundColor: branding.colors.primary }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2"
                      style={{ backgroundColor: branding.colors.primary }}></span>
              </span>
              <span style={{ color: branding.colors.primary }}>{callToAction.urgency}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 