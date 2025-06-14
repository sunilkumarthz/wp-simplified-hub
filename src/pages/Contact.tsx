
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', purpose: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-baloo font-bold text-white mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate, need WordPress help, or want to be a podcast guest? 
            I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-baloo font-bold text-white mb-6">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:border-wp-teal focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:border-wp-teal focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="purpose" className="block text-white font-semibold mb-2">
                      Purpose of Contact *
                    </label>
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:border-wp-teal focus:outline-none"
                    >
                      <option value="">Select purpose</option>
                      <option value="collaboration">Collaboration Opportunity</option>
                      <option value="support">WordPress Support/Development</option>
                      <option value="podcast">Podcast Guest Application</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:border-wp-teal focus:outline-none resize-none"
                      placeholder="Tell me about your project, question, or how we can work together..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full wp-gradient text-slate-900 font-bold text-lg py-4 hover:scale-105 transition-transform duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Info */}
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-baloo font-bold text-white mb-6">
                    Let's Connect
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-wp-teal rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📍</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Location</h4>
                        <p className="text-slate-300">Alwar, Rajasthan, India</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-wp-teal rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">⏰</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Response Time</h4>
                        <p className="text-slate-300">Usually within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-wp-teal rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">💼</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Services</h4>
                        <p className="text-slate-300">WordPress Development, Consulting, Speaking</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-baloo font-bold text-white mb-6">
                    Follow Me
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://www.linkedin.com/in/sunilkumarthz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                      <span className="text-xl">💼</span>
                      <span className="text-white font-semibold">LinkedIn</span>
                    </a>

                    <a
                      href="https://x.com/sunilkumarthz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-200"
                    >
                      <span className="text-xl">🐦</span>
                      <span className="text-white font-semibold">Twitter</span>
                    </a>

                    <a
                      href="https://github.com/sunilkumarthz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      <span className="text-xl">💻</span>
                      <span className="text-white font-semibold">GitHub</span>
                    </a>

                    <a
                      href="https://www.youtube.com/@wpsimplifiedbysunil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-slate-700 rounded-lg hover:bg-red-600 transition-colors duration-200"
                    >
                      <span className="text-xl">📺</span>
                      <span className="text-white font-semibold">YouTube</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-baloo font-bold text-white mb-6">
                    Quick Questions
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-wp-teal mb-1">What services do you offer?</h4>
                      <p className="text-slate-300 text-sm">WordPress development, consulting, training, and speaking engagements.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-wp-teal mb-1">How can I be a podcast guest?</h4>
                      <p className="text-slate-300 text-sm">Select "Podcast Guest Application" above and tell me about your WordPress expertise.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-wp-teal mb-1">Do you offer WordPress support?</h4>
                      <p className="text-slate-300 text-sm">Yes! I provide development and consulting services for WordPress projects.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
