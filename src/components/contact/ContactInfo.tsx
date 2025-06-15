
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
