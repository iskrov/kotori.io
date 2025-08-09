import { Mic, FileText, EyeOff, Users, Calendar, Shield } from 'lucide-react';
import { useSiteConfig } from '../hooks/useSiteConfig';

export function Features() {
  const { config, loading, error } = useSiteConfig();

  if (loading) {
    return (
      <section className="py-24 bg-white dark:bg-gray-900" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-4 mx-auto max-w-md"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-16 mx-auto max-w-lg"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-6"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !config) {
    return (
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Features
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Unable to load features configuration.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const { features, branding } = config;

  // Map features to appropriate Lucide icons
  const getFeatureIcon = (index: number, title: string) => {
    const iconMap = [
      Mic,        // Voice → structure
      FileText,   // Templates & reminders  
      EyeOff,     // Low-stim, eyes-free
      Users,      // Multi-language sharing
      Calendar,   // Weekly summaries
      Shield      // Private by default
    ];
    
    const IconComponent = iconMap[index] || Mic;
    return <IconComponent className="h-7 w-7" style={{ color: branding.colors.primary }} />;
  };

  return (
    <section className="py-24 bg-kotori-pastelSage/60 dark:bg-gray-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to succeed, built with modern technology and user experience in mind.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105"
                  style={{ backgroundColor: `${branding.colors.primary}15` }}
                >
                  {getFeatureIcon(index, feature.title)}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 