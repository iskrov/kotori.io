import { useEffect } from 'react';
import { useSiteConfig } from '../hooks/useSiteConfig';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
// import { ValueProposition } from '../components/ValueProposition';
import { CallToAction } from '../components/CallToAction';
// import { Security } from '../components/Security';
// import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { HowItFeels } from '../components/HowItFeels';
import { Languages } from '../components/Languages';
import { Footer } from '../components/Footer';

function App() {
  const { config, loading, error } = useSiteConfig();

  // Update document title and meta tags based on site config
  useEffect(() => {
    if (config) {
      document.title = config.site.title;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', config.site.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = config.site.description;
        document.head.appendChild(meta);
      }

      // Update meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', config.seo.keywords.join(', '));
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = config.seo.keywords.join(', ');
        document.head.appendChild(meta);
      }

      // Update Open Graph tags
      const updateOrCreateMetaTag = (property: string, content: string) => {
        let metaTag = document.querySelector(`meta[property="${property}"]`);
        if (metaTag) {
          metaTag.setAttribute('content', content);
        } else {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('property', property);
          metaTag.setAttribute('content', content);
          document.head.appendChild(metaTag);
        }
      };

      updateOrCreateMetaTag('og:title', config.site.title);
      updateOrCreateMetaTag('og:description', config.site.description);
      updateOrCreateMetaTag('og:type', 'website');
      if (config.seo.ogImage) {
        updateOrCreateMetaTag('og:image', config.seo.ogImage);
      }

      // Update Twitter Card tags
      const updateOrCreateTwitterTag = (name: string, content: string) => {
        let metaTag = document.querySelector(`meta[name="${name}"]`);
        if (metaTag) {
          metaTag.setAttribute('content', content);
        } else {
          metaTag = document.createElement('meta');
          metaTag.setAttribute('name', name);
          metaTag.setAttribute('content', content);
          document.head.appendChild(metaTag);
        }
      };

      updateOrCreateTwitterTag('twitter:card', config.seo.twitterCard);
      updateOrCreateTwitterTag('twitter:title', config.site.title);
      updateOrCreateTwitterTag('twitter:description', config.site.description);
      if (config.seo.ogImage) {
        updateOrCreateTwitterTag('twitter:image', config.seo.ogImage);
      }
    }
  }, [config]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading your website...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-950 dark:to-pink-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-600 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Configuration Error
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Unable to load site configuration. Please check your site-config.json file.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-800 p-3 rounded">
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        {/* <ValueProposition /> */}
        <HowItFeels />
        <Languages />
        {/* <Security /> */}
        <CallToAction />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App; 