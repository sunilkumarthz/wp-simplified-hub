import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactSocial from '@/components/contact/ContactSocial';
import HeroBackground from '@/components/hero/HeroBackground';

const Contact = () => {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact WPSimplified',
    description:
      'Contact WPSimplified for WordPress tutorials, theme development, plugin customization, and website optimization services.',
    url: 'https://wpsimplified.in/contact',
    potentialAction: {
      '@type': 'CommunicateAction',
      actionStatus: 'https://schema.org/ActiveActionStatus',
      name: 'Contact Us',
      target: 'https://wpsimplified.in/contact',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://wpsimplified.in/contact',
    },
  };

  return (
    <>
      <SEOHead
        title="Contact WPSimplified - WordPress Tutorials & Services"
        description="Contact WPSimplified for WordPress tutorials, theme development, plugin customization, and website optimization services."
        keywords="WordPress tutorials, WordPress theme development, WordPress plugin customization, website optimization, contact WordPress expert"
        url="https://wpsimplified.in/contact"
        jsonLd={contactJsonLd}
      />

      <div className="min-h-screen bg-slate-900">
        <Header />
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <HeroBackground />
          <ContactHero />

          {/* Contact Form Section */}
          <div className="pb-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <ContactForm />
                </div>
                <div>
                  <ContactInfo />
                </div>
              </div>
            </div>
          </div>

          {/* Social Section - Full Width */}
          <div className="pb-20">
            <div className="container mx-auto px-4">
              <ContactSocial />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
