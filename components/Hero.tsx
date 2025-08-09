import { ChevronRight, Play } from 'lucide-react';
import { useSiteConfig } from '../hooks/useSiteConfig';

export function Hero() {
  const { config, loading, error } = useSiteConfig();

  if (loading) {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded mb-8 mx-auto max-w-4xl"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-12 mx-auto max-w-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !config) {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              Welcome to Your Website
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Configuration loading failed. Please check your site-config.json file.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const { hero, branding } = config;
  
  // Create CSS custom properties for colors
  const colorStyles = {
    '--color-primary': branding.colors.primary,
    '--color-secondary': branding.colors.secondary,
    '--color-accent': branding.colors.accent,
  } as React.CSSProperties;

  return (
    <div 
      className="relative overflow-hidden"
      style={colorStyles}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-kotori-pastelBlue via-white to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-900" />
      {/* Faint oversized bird silhouette (centered, responsive) */}
      {branding.logo.iconUrl && (
        <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center" aria-hidden>
          <img
            src={branding.logo.iconUrl}
            alt="Kotori app logo - small listening bird"
            className="w-[95vw] md:w-[65vw] lg:w-[50vw] max-w-none opacity-[0.05] blur-[1px]"
          />
        </div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100svh-4rem)] flex flex-col justify-center py-16 lg:py-20" id="overview">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            {hero.headline}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {hero.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <a
              href="#final-cta"
              className="px-8 py-4 text-white font-semibold rounded-xl"
              style={{ backgroundColor: branding.colors.primary }}
            >
              {hero.cta.primary}
              <ChevronRight className="inline ml-2 h-5 w-5" />
            </a>
            
            <a href="#how-it-works" className="group flex items-center px-8 py-4 text-gray-700 dark:text-gray-300 font-semibold">
              <Play className="mr-3 h-5 w-5" />
              {hero.cta.secondary}
            </a>
          </div>
          
          {/* Removed hero logo as requested */}
        </div>
      </div>
      {/* Bottom soft transition into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-kotori-pastelSage/60 dark:to-gray-800/60" aria-hidden />
    </div>
  );
} 