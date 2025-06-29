
import { Clock, Users, MessageCircle } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="py-20 text-center relative">
      <div className="absolute inset-0 wp-gradient-dark opacity-20 rounded-3xl"></div>
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-baloo font-bold text-white mb-4">
          Collaborate <span className="text-gradient">with me</span>
        </h1>

        <h2 className="text-3xl md:text-4xl font-baloo font-semibold text-wp-teal mb-6">
          Get in Touch
        </h2>

        <p className="text-xl text-slate-300 max-w-3xl mx-auto font-roboto leading-relaxed mb-8">
          Interested in WordPress development, speaking engagements, or
          community collaborations? Let's connect and create something amazing
          together!
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="flex items-center space-x-2 text-slate-300">
            <Clock className="h-5 w-5 text-wp-teal" />
            <span className="font-roboto">24h Response</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-300">
            <Users className="h-5 w-5 text-wp-teal" />
            <span className="font-roboto">++ Happy Students</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-300">
            <MessageCircle className="h-5 w-5 text-wp-teal" />
            <span className="font-roboto">Free Consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
