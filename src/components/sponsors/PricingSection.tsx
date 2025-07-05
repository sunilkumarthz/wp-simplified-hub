import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Zap } from 'lucide-react';

const PricingSection = () => {
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
        "Community Discord shout-out",
        "Basic analytics reporting"
      ],
      badge: "Most Popular",
      color: "bg-blue-500",
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
        "Priority support for campaigns",
        "Advanced analytics dashboard"
      ],
      badge: "Best Value",
      color: "bg-primary",
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
        "Dedicated account manager",
        "White-label content options"
      ],
      badge: "Premium",
      color: "bg-purple-500",
      highlighted: false
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/20 text-primary px-4 py-2 text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            Flexible Pricing Options
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your <span className="text-primary">Partnership</span> Level
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Flexible sponsorship packages designed to meet your marketing goals and budget. 
            Each package includes comprehensive analytics and dedicated support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 hover:scale-105 ${
                pkg.highlighted
                  ? 'bg-primary/5 border-primary/50 shadow-2xl scale-105'
                  : 'bg-card/50 border-border/50 hover:border-primary/30'
              }`}
            >
              {/* Popular Badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className={`${pkg.color} text-white px-6 py-2 text-sm font-semibold shadow-lg`}>
                    {pkg.highlighted && <Zap className="w-4 h-4 mr-1" />}
                    {pkg.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </CardTitle>
                
                {/* Price */}
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-bold text-primary">{pkg.price}</span>
                  {pkg.period && <span className="text-muted-foreground ml-2 text-lg">{pkg.period}</span>}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-muted-foreground"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant={pkg.highlighted ? 'solid' : 'outline'}
                  className="w-full text-lg py-6"
                  size="lg"
                  onClick={() =>
                    window.open(
                      `mailto:sponsor@wpsimplified.in?subject=Partnership Inquiry - ${pkg.name} Package&body=Hi, I'm interested in the ${pkg.name} sponsorship package. Please provide more details about pricing and next steps.`,
                      '_blank'
                    )
                  }
                >
                  {pkg.highlighted && <Zap className="w-5 h-5 mr-2" />}
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Need a custom package? We're here to help create the perfect partnership.
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              window.open(
                'mailto:sponsor@wpsimplified.in?subject=Custom Partnership Inquiry&body=Hi, I would like to discuss a custom sponsorship package that fits our specific needs.',
                '_blank'
              )
            }
          >
            Contact for Custom Package
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;