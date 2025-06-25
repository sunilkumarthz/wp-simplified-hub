
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactSocial from '@/components/contact/ContactSocial';

const Contact = () => {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact WPSimplified",
    "description": "Contact WPSimplified for WordPress tutorials, theme development, plugin customization, and website optimization services.",
    "url": "https://wpsimplified.in/contact",
    "potentialAction": {
      "@type": "CommunicateAction",
      "actionStatus": "https://schema.org/ActiveActionStatus",
      "name": "Contact Us",
      "target": "https://wpsimplified.in/contact"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://wpsimplified.in/contact"
    }
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

      <div className="min-h-screen bg-slate-800">
        <Header />

        <ContactHero />

        {/* Contact Form Section */}
        <section className="pb-12">
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
        </section>

        {/* Social Section - Full Width */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <ContactSocial />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
