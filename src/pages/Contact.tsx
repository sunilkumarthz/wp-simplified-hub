
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Twitter, Github, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', whatsapp: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const collaborationTypes = [
    'Plugin Developer',
    'WordCamp Speaker',
    'Community Organizer', 
    'WordPress Contributor'
  ];

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 wp-gradient-dark opacity-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-wp-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-wp-blue/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <div className="inline-block px-4 py-2 bg-wp-teal/20 rounded-full mb-6">
              <span className="text-wp-teal font-semibold text-sm">GET IN TOUCH</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-baloo font-bold text-white mb-6">
              Collaborate With <span className="text-gradient">Me</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Interested in WordPress development, speaking engagements, or 
              community collaborations? Let's connect and create something 
              amazing together!
            </p>
            
            {/* Collaboration Types */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {collaborationTypes.map((type) => (
                <div key={type} className="px-4 py-2 bg-slate-800 rounded-full border border-wp-teal">
                  <span className="text-wp-teal text-sm">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - Contact Info */}
              <div className="space-y-8">
                {/* Get in Touch */}
                <div>
                  <h2 className="text-3xl font-baloo font-bold text-white mb-8">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-wp-teal rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-slate-900" />
                      </div>
                      <div>
                        <h3 className="text-xl font-baloo font-bold text-white">Email</h3>
                        <p className="text-slate-300">hello@wpsimplified.in</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-wp-teal rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-slate-900" />
                      </div>
                      <div>
                        <h3 className="text-xl font-baloo font-bold text-white">Location</h3>
                        <p className="text-slate-300">Alwar, Rajasthan, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connect With Me */}
                <div>
                  <h3 className="text-2xl font-baloo font-bold text-white mb-6">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/sunilkumarthz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-wp-teal transition-colors"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://x.com/sunilkumarthz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-wp-teal transition-colors"
                    >
                      <Twitter className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href="https://github.com/sunilkumarthz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-wp-teal transition-colors"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>

                {/* About Me */}
                <div>
                  <h3 className="text-2xl font-baloo font-bold text-white mb-4">About Me</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Senior Manager – Technology at The Better India, leading scalable WordPress 
                    platform development with over a decade of experience.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Active WordPress contributor, community builder, speaker, and organizer 
                    passionate about open source.
                  </p>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-6 h-6 bg-wp-teal rounded flex items-center justify-center">
                      <span className="text-slate-900 text-xs">📝</span>
                    </div>
                    <h2 className="text-2xl font-baloo font-bold text-white">
                      Collaboration Form
                    </h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-wp-teal font-semibold mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:border-wp-teal focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-wp-teal font-semibold mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:border-wp-teal focus:outline-none"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="whatsapp" className="block text-wp-teal font-semibold mb-2">
                          WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          id="whatsapp"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:border-wp-teal focus:outline-none"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-wp-teal font-semibold mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:border-wp-teal focus:outline-none"
                        placeholder="Podcast Collaboration Request"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-wp-teal font-semibold mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:border-wp-teal focus:outline-none resize-none"
                        placeholder="Tell me about yourself and how you'd like to collaborate..."
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
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
