import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Display success toast
      toast({
        title: 'Message sent successfully!',
        description: 'We will get back to you soon.',
      });

      // Reset the form
      form.reset();
    } catch (error) {
      // Display error toast
      toast({
        title: 'Something went wrong.',
        description: 'There was an error sending your message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      
      <div className="min-h-screen bg-slate-900">
        <Header />
        
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-6">
              Contact <span className="text-gradient">WPSimplified</span>
            </h1>
            
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-roboto leading-relaxed mb-8">
              Have questions, need assistance, or want to discuss a project? 
              Reach out to us, and let's bring your WordPress vision to life.
            </p>
          </section>

          {/* Contact Form Section */}
          <section className="pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card className="bg-slate-800/60 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl font-baloo font-bold text-white">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <Input
                        id="name"
                        placeholder="Your Name"
                        type="text"
                        {...form.register('name')}
                        disabled={isSubmitting}
                      />
                      {form.formState.errors.name && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        id="email"
                        placeholder="Your Email"
                        type="email"
                        {...form.register('email')}
                        disabled={isSubmitting}
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <Textarea
                        id="message"
                        placeholder="Your Message"
                        rows={4}
                        {...form.register('message')}
                        disabled={isSubmitting}
                      />
                      {form.formState.errors.message && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                      )}
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full font-semibold">
                      {isSubmitting ? (
                        <>
                          <Send className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-slate-800/60 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl font-baloo font-bold text-white">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 text-slate-300">
                    <Mail className="h-5 w-5 text-wp-teal" />
                    <a href="mailto:contact@wpsimplified.in" className="hover:text-wp-teal transition-colors">
                      contact@wpsimplified.in
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <Phone className="h-5 w-5 text-wp-teal" />
                    <a href="tel:+919876543210" className="hover:text-wp-teal transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <MapPin className="h-5 w-5 text-wp-teal" />
                    <span>
                      123 Tech Park,
                      <br />
                      Electronic City, Bangalore, India
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-300">
                    <MessageCircle className="h-5 w-5 text-wp-teal" />
                    <a href="https://www.youtube.com/@wpsimplifiedbysunil" target="_blank" rel="noopener noreferrer" className="hover:text-wp-teal transition-colors">
                      @wpsimplifiedbysunil
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
