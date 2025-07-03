
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <>
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
                <span className="text-wp-teal font-semibold">
                  👨‍💻 Code. 📸 Click. 📣 Connect.
                </span>{' '}
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                I'm <span className="text-wp-teal font-semibold">Sunil</span> —
                a WordPress wizard with 10+ years of experience turning ideas
                into fast, scalable, and elegant digital experiences. By heart,
                I’m a proud part of the WordPress community — organizing,
                speaking, and volunteering at WordCamps across India and Nepal.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                When I’m not debugging code, I’m capturing the magic of
                communities through my lens or sharing insights on YouTube.
                Whether it’s building plugins, scaling themes, or just geeking
                out with fellow devs — I love creating and connecting.
              </p>
              <p className="text-slate-300 leading-relaxed">
                ⚡ Core Developer • Plugin Craftsman • Community Builder
              </p>
              <p className="text-slate-300 leading-relaxed">
                📍 Alwar, Rajasthan | 🌐 sunilkumarthz.com
              </p>
            </div>

            {/* Image/Visual Content */}
            <div className="animate-fade-in">
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-wp-teal/30">
                      <img
                        src="/images/profile.png"
                        alt="Sunil Kumar - WordPress Developer and Educator"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl font-baloo font-bold text-white mb-2">
                        Sunil Kumar
                      </h3>
                      <p className="text-wp-teal font-semibold">
                        WordPress Educator & Developer
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-6">
                      {/* <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                        <div className="text-2xl font-baloo font-bold text-wp-teal mb-1">
                          100+
                        </div>
                        <div className="text-sm text-slate-300">
                          Tutorials Created
                        </div>
                      </div>
                      <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                        <div className="text-2xl font-baloo font-bold text-wp-teal mb-1">
                          5k+
                        </div>
                        <div className="text-sm text-slate-300">
                          Students Taught
                        </div>
                      </div> */}
                      <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                        <div className="text-2xl font-baloo font-bold text-wp-teal mb-1">
                          10+
                        </div>
                        <div className="text-sm text-slate-300">
                          Years Experience
                        </div>
                      </div>
                      <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                        <div className="text-2xl font-baloo font-bold text-wp-teal mb-1">
                          20+
                        </div>
                        <div className="text-sm text-slate-300">
                          Community Events
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
