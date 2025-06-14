
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-slide-in-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-baloo font-bold text-white mb-4">
                  About <span className="text-gradient">Sunil Kumar</span>
                </h2>
                <div className="w-24 h-1 wp-gradient rounded-full mb-6"></div>
              </div>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                <span className="text-wp-teal font-semibold">10+ years of experience</span> in WordPress development, 
                community building, and education. Passionate about simplifying complex WordPress concepts 
                for developers and content creators worldwide.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-wp-teal rounded-full mt-2"></div>
                  <span className="text-slate-300"><strong className="text-white">Role:</strong> WordPress Developer, Community Speaker & Volunteer</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-wp-teal rounded-full mt-2"></div>
                  <span className="text-slate-300"><strong className="text-white">Location:</strong> Alwar, Rajasthan, India</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-wp-teal rounded-full mt-2"></div>
                  <span className="text-slate-300"><strong className="text-white">Website:</strong> sunilkumarthz.com</span>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-2xl font-baloo font-bold text-white mb-4">Mission</h3>
                <p className="text-slate-300 leading-relaxed">
                  To make WordPress accessible to everyone by creating comprehensive, 
                  easy-to-follow tutorials and fostering a supportive community where 
                  learners can grow from complete beginners to WordPress heroes.
                </p>
              </div>
            </div>

            {/* Image/Visual Content */}
            <div className="animate-fade-in">
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-wp-teal to-wp-blue rounded-full flex items-center justify-center">
                      <span className="text-4xl font-baloo font-bold text-white">SK</span>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-baloo font-bold text-white mb-2">Sunil Kumar</h3>
                      <p className="text-wp-teal font-semibold">WordPress Educator & Developer</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-6">
                      <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                        <div className="text-2xl font-baloo font-bold text-wp-teal mb-1">100+</div>
                        <div className="text-sm text-slate-300">Tutorials Created</div>
                      </div>
                      <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                        <div className="text-2xl font-baloo font-bold text-wp-teal mb-1">5k+</div>
                        <div className="text-sm text-slate-300">Students Taught</div>
                      </div>
                      <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                        <div className="text-2xl font-baloo font-bold text-wp-teal mb-1">10+</div>
                        <div className="text-sm text-slate-300">Years Experience</div>
                      </div>
                      <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                        <div className="text-2xl font-baloo font-bold text-wp-teal mb-1">20+</div>
                        <div className="text-sm text-slate-300">Community Events</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
