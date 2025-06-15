
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
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Users } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
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
      subject: '',
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
        description: 'We will get back to you within 24 hours.',
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
          <section className="py-20 text-center relative">
            <div className="absolute inset-0 wp-gradient-dark opacity-20 rounded-3xl"></div>
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-baloo font-bold text-white mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-roboto leading-relaxed mb-8">
                Have questions about WordPress? Need help with your project? 
                Let's connect and turn your ideas into reality.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="flex items-center space-x-2 text-slate-300">
                  <Clock className="h-5 w-5 text-wp-teal" />
                  <span className="font-roboto">24h Response</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <Users className="h-5 w-5 text-wp-teal" />
                  <span className="font-roboto">1000+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <MessageCircle className="h-5 w-5 text-wp-teal" />
                  <span className="font-roboto">Free Consultation</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="creative-card bg-slate-800/80 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-3xl font-baloo font-bold text-white flex items-center gap-3">
                      <Send className="h-8 w-8 text-wp-teal" />
                      Send us a Message
                    </CardTitle>
                    <p className="text-slate-400 font-roboto">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-slate-300">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            placeholder="Your full name"
                            type="text"
                            {...form.register('name')}
                            disabled={isSubmitting}
                            className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-wp-teal focus:ring-wp-teal/20"
                          />
                          {form.formState.errors.name && (
                            <p className="text-red-400 text-sm">{form.formState.errors.name.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-slate-300">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            placeholder="your.email@example.com"
                            type="email"
                            {...form.register('email')}
                            disabled={isSubmitting}
                            className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-wp-teal focus:ring-wp-teal/20"
                          />
                          {form.formState.errors.email && (
                            <p className="text-red-400 text-sm">{form.formState.errors.email.message}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-slate-300">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          placeholder="What can we help you with?"
                          type="text"
                          {...form.register('subject')}
                          disabled={isSubmitting}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-wp-teal focus:ring-wp-teal/20"
                        />
                        {form.formState.errors.subject && (
                          <p className="text-red-400 text-sm">{form.formState.errors.subject.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-slate-300">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your project or question..."
                          rows={6}
                          {...form.register('message')}
                          disabled={isSubmitting}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-wp-teal focus:ring-wp-teal/20 resize-none"
                        />
                        {form.formState.errors.message && (
                          <p className="text-red-400 text-sm">{form.formState.errors.message.message}</p>
                        )}
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="w-full font-semibold h-12 text-base"
                      >
                        {isSubmitting ? (
                          <>
                            <Send className="mr-2 h-5 w-5 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information & Additional Info */}
              <div className="space-y-6">
                {/* Contact Information */}
                <Card className="creative-card bg-slate-800/80 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-baloo font-bold text-white">
                      Contact Information
                    </CardTitle>
                    <p className="text-slate-400 font-roboto text-sm">
                      Reach out to us through any of these channels
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-10 h-10 bg-wp-teal/10 rounded-lg flex items-center justify-center group-hover:bg-wp-teal/20 transition-colors">
                        <Mail className="h-5 w-5 text-wp-teal" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white font-roboto">Email</h4>
                        <a href="mailto:contact@wpsimplified.in" className="text-slate-300 hover:text-wp-teal transition-colors font-roboto">
                          contact@wpsimplified.in
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-10 h-10 bg-wp-teal/10 rounded-lg flex items-center justify-center group-hover:bg-wp-teal/20 transition-colors">
                        <Phone className="h-5 w-5 text-wp-teal" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white font-roboto">Phone</h4>
                        <a href="tel:+919876543210" className="text-slate-300 hover:text-wp-teal transition-colors font-roboto">
                          +91 98765 43210
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-10 h-10 bg-wp-teal/10 rounded-lg flex items-center justify-center group-hover:bg-wp-teal/20 transition-colors">
                        <MapPin className="h-5 w-5 text-wp-teal" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white font-roboto">Location</h4>
                        <p className="text-slate-300 font-roboto">
                          123 Tech Park,<br />
                          Electronic City, Bangalore, India
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-10 h-10 bg-wp-teal/10 rounded-lg flex items-center justify-center group-hover:bg-wp-teal/20 transition-colors">
                        <MessageCircle className="h-5 w-5 text-wp-teal" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white font-roboto">YouTube</h4>
                        <a href="https://www.youtube.com/@wpsimplifiedbysunil" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-wp-teal transition-colors font-roboto">
                          @wpsimplifiedbysunil
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Help */}
                <Card className="creative-card bg-gradient-to-br from-wp-teal/10 to-wp-teal-dark/10 border-wp-teal/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-baloo font-bold text-white">
                      Need Quick Help?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-300 font-roboto text-sm leading-relaxed">
                      Join our YouTube community for instant tips, tutorials, and connect with fellow WordPress developers.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-wp-teal text-wp-teal hover:bg-wp-teal hover:text-slate-900 font-semibold"
                      asChild
                    >
                      <a 
                        href="https://www.youtube.com/@wpsimplifiedbysunil" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        🔔 Subscribe Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
