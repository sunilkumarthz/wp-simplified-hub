
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { submitContactForm, type ContactFormData } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    purpose: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePurposeChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      purpose: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
          purpose: ''
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 wp-gradient-dark opacity-30"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-wp-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-wp-blue/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-baloo font-bold text-white mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-roboto leading-relaxed">
              Have a question about WordPress? Want to collaborate on a project? 
              Interested in being a guest on my podcast? Let's connect!
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-baloo font-bold text-white mb-2">
                    Send me a message
                  </CardTitle>
                  <p className="text-slate-400 font-roboto">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white font-roboto">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-roboto">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="purpose" className="text-white font-roboto">Purpose of Contact *</Label>
                      <Select value={formData.purpose} onValueChange={handlePurposeChange} required>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Select the purpose of your message" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="collaboration">Collaboration</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="podcast">Podcast Guest</SelectItem>
                          <SelectItem value="business">Business Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white font-roboto">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, question, or how I can help..."
                        rows={6}
                        required
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-gradient text-slate-900 font-roboto font-bold"
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-baloo font-bold text-white mb-6">
                      Contact Information
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-wp-teal rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6 text-slate-900" />
                        </div>
                        <div>
                          <h4 className="text-white font-roboto font-semibold mb-1">Email</h4>
                          <p className="text-slate-400 font-roboto">hello@wpsimplified.in</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-wp-teal rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-slate-900" />
                        </div>
                        <div>
                          <h4 className="text-white font-roboto font-semibold mb-1">Location</h4>
                          <p className="text-slate-400 font-roboto">Alwar, Rajasthan, India</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-baloo font-bold text-white mb-6">
                      Response Time
                    </h3>
                    <p className="text-slate-300 font-roboto leading-relaxed mb-4">
                      I typically respond to messages within 24-48 hours. For urgent matters, 
                      please mention "URGENT" in your subject line.
                    </p>
                    <p className="text-slate-400 font-roboto text-sm">
                      Best response times: Monday - Friday, 9 AM - 6 PM IST
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-baloo font-bold text-white mb-6">
                      Follow Me
                    </h3>
                    <p className="text-slate-300 font-roboto mb-4">
                      Stay updated with my latest content and WordPress tips:
                    </p>
                    <div className="space-y-3">
                      <a 
                        href="https://www.linkedin.com/in/sunilkumarthz/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg hover:bg-wp-teal hover:text-slate-900 transition-all duration-300 text-white"
                      >
                        <span className="text-sm font-bold">LI</span>
                        <span className="font-roboto">LinkedIn</span>
                      </a>
                      <a 
                        href="https://x.com/sunilkumarthz" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg hover:bg-wp-teal hover:text-slate-900 transition-all duration-300 text-white"
                      >
                        <span className="text-sm font-bold">X</span>
                        <span className="font-roboto">X (Twitter)</span>
                      </a>
                      <a 
                        href="https://github.com/sunilkumarthz" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg hover:bg-wp-teal hover:text-slate-900 transition-all duration-300 text-white"
                      >
                        <span className="text-sm font-bold">GH</span>
                        <span className="font-roboto">GitHub</span>
                      </a>
                      <a 
                        href="https://profiles.wordpress.org/sunilkumarthz/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg hover:bg-wp-teal hover:text-slate-900 transition-all duration-300 text-white"
                      >
                        <span className="text-sm font-bold">WP</span>
                        <span className="font-roboto">WordPress.org</span>
                      </a>
                      <a 
                        href="https://www.youtube.com/@wpsimplifiedbysunil" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg hover:bg-wp-teal hover:text-slate-900 transition-all duration-300 text-white"
                      >
                        <span className="text-sm font-bold">YT</span>
                        <span className="font-roboto">YouTube</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
