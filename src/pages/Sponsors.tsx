import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, TrendingUp, Globe, Award, Handshake, Zap, Target, CheckCircle } from 'lucide-react';

const Sponsors = () => {
  const benefits = [
    {
      icon: Users,
      title: "Massive Reach",
      description: "Connect with 100,000+ WordPress enthusiasts and developers worldwide",
      stats: "100K+ Monthly Views"
    },
    {
      icon: TrendingUp,
      title: "High Engagement",
      description: "Our community actively engages with content, ensuring your brand gets noticed",
      stats: "15% Avg. Engagement Rate"
    },
    {
      icon: Globe,
      title: "Global Audience",
      description: "Reach WordPress professionals across 50+ countries",
      stats: "50+ Countries"
    },
    {
      icon: Star,
      title: "Premium Content",
      description: "Your brand featured in high-quality, educational WordPress content",
      stats: "4.9/5 Content Rating"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$500",
      period: "/month",
      description: "Perfect for small businesses wanting to reach WordPress developers",
      features: [
        "Logo placement in video descriptions",
        "Monthly social media mentions",
        "Newsletter inclusion (2x/month)",
        "Community Discord shout-out"
      ],
      badge: "Most Popular",
      highlighted: false
    },
    {
      name: "Professional",
      price: "$1,500",
      period: "/month",
      description: "Ideal for SaaS companies and WordPress service providers",
      features: [
        "Dedicated video sponsorship (1x/month)",
        "Logo in video intro/outro",
        "Featured in newsletter header",
        "Social media post series",
        "Podcast mention opportunities",
        "Priority support for campaigns"
      ],
      badge: "Best Value",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Comprehensive partnership for established WordPress brands",
      features: [
        "Custom video series creation",
        "Product integration tutorials",
        "Live webinar collaborations",
        "Exclusive interview opportunities",
        "Co-branded content creation",
        "Annual conference presence",
        "Dedicated account manager"
      ],
      badge: "Premium",
      highlighted: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "WP Tools Pro",
      quote: "Partnering with WPSimplified transformed our brand awareness. We saw a 300% increase in qualified leads!",
      role: "Marketing Director"
    },
    {
      name: "Mike Chen",
      company: "HostWP Solutions",
      quote: "The quality of engagement from Sunil's audience is exceptional. Best ROI we've seen from any marketing channel.",
      role: "CEO"
    }
  ];

  return (
    <>
      <SEOHead
        title="Sponsor WPSimplified - Partner with WordPress Experts"
        description="Partner with WPSimplified to reach 100,000+ WordPress professionals. Flexible sponsorship packages for businesses of all sizes."
      />
      <div className="bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-wp-teal/10 to-cyan-400/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <Badge className="bg-gradient-to-r from-wp-teal to-cyan-400 text-white px-4 py-2 text-lg font-semibold animate-pulse">
                  <Handshake className="w-5 h-5 mr-2" />
                  Partnership Opportunities
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-baloo font-bold text-white mb-6 leading-tight">
                Partner with
                <span className="block text-transparent bg-gradient-to-r from-wp-teal via-cyan-400 to-emerald-400 bg-clip-text">
                  WPSimplified
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed font-roboto">
                Join industry leaders in sponsoring the most trusted WordPress
                education platform. Reach passionate developers and business
                owners who rely on our expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="solid"
                  size="lg"
                  onClick={() =>
                    window.open(
                      'mailto:sponsor@wpsimplified.in?subject=Partnership Inquiry - Start Partnership',
                      '_blank'
                    )
                  }
                >
                  <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start Partnership
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('/media-kit.pdf', '_blank')}
                >
                  <Target className="w-5 h-5 mr-2" />
                  View Media Kit
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-baloo font-bold text-white mb-4">
                Why Sponsor WPSimplified?
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Reach the right audience with the perfect platform for
                WordPress-focused marketing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="bg-slate-800/50 border-slate-700 hover:border-wp-teal/50 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-r from-wp-teal to-cyan-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-white text-xl">
                        {benefit.title}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="border-wp-teal text-wp-teal"
                      >
                        {benefit.stats}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300 text-center">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-baloo font-bold text-white mb-4">
                Sponsorship Packages
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Flexible options designed to meet your marketing goals and
                budget
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`relative ${
                    pkg.highlighted
                      ? 'bg-gradient-to-b from-wp-teal/20 to-slate-800/50 border-wp-teal scale-105'
                      : 'bg-slate-800/50 border-slate-700'
                  } hover:border-wp-teal/50 transition-all duration-300 hover:transform hover:scale-110`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge
                        className={`${
                          pkg.highlighted
                            ? 'bg-wp-teal'
                            : 'bg-gradient-to-r from-wp-teal to-cyan-400'
                        } text-white px-4 py-1`}
                      >
                        {pkg.badge}
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-white">
                      {pkg.name}
                    </CardTitle>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-wp-teal">
                        {pkg.price}
                      </span>
                      <span className="text-slate-400 ml-2">{pkg.period}</span>
                    </div>
                    <CardDescription className="text-slate-300 mt-4">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-slate-300"
                        >
                          <CheckCircle className="w-5 h-5 text-wp-teal mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={pkg.highlighted ? 'solid' : 'outline'}
                      className="w-full mt-8"
                      onClick={() =>
                        window.open(
                          `mailto:sponsor@wpsimplified.in?subject=Partnership Inquiry - ${pkg.name} Package&body=Hi, I'm interested in the ${pkg.name} sponsorship package. Please provide more details.`,
                          '_blank'
                        )
                      }
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-baloo font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Hear from our partners who've achieved remarkable results
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 hover:border-wp-teal/50 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-slate-300 italic mb-6 text-lg">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-wp-teal">{testimonial.role}</div>
                      <div className="text-slate-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-wp-teal/20 to-cyan-400/20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-baloo font-bold text-white mb-6">
                Ready to Grow Your WordPress Business?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Join successful companies who trust WPSimplified to connect them
                with their ideal audience. Let's create something amazing
                together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="solid"
                  size="lg"
                  onClick={() =>
                    window.open(
                      'mailto:sponsor@wpsimplified.in?subject=Partnership Inquiry - Become a Sponsor&body=Hi, I would like to become a sponsor for WPSimplified. Please provide more information about your partnership opportunities.',
                      '_blank'
                    )
                  }
                >
                  <Award className="w-5 h-5 mr-2" />
                  Become a Sponsor
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    window.open(
                      'mailto:sponsor@wpsimplified.in?subject=General Partnership Inquiry',
                      '_blank'
                    )
                  }
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Sponsors;
