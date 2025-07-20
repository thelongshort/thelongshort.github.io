
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Professional",
    price: "$499",
    period: "per month",
    description: "Perfect for individual analysts and small hedge funds",
    features: [
      "Access to strategy database",
      "Market intelligence reports",
      "Basic risk analytics",
      "Real-time alerts",
      "Standard support"
    ],
    popular: false
  },
  {
    name: "Institutional",
    price: "$1,299",
    period: "per month",
    description: "Advanced features for established hedge funds",
    features: [
      "Everything in Professional",
      "Advanced alpha discovery",
      "Custom strategy modeling",
      "API access & integrations",
      "Dedicated relationship manager",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Contact us",
    period: "for pricing",
    description: "Tailored solutions for large institutional funds",
    features: [
      "Everything in Institutional",
      "Custom data feeds",
      "White-label solutions",
      "On-premise deployment",
      "24/7 dedicated support",
      "Custom training & onboarding"
    ],
    popular: false
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-gradient-radial from-accent-purple/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-radial from-accent-cyan/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your
            <span className="block bg-gradient-text bg-clip-text text-transparent">
              Intelligence Level
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your hedge fund intelligence needs.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative group hover:shadow-lift transition-all duration-300 hover:-translate-y-1 rounded-2xl ${
                plan.popular 
                  ? 'ring-2 ring-accent-cyan shadow-glow bg-gradient-glass backdrop-blur-sm border-accent-cyan/30' 
                  : 'bg-gradient-glass backdrop-blur-sm hover:bg-gradient-accent/10 border border-accent-purple/20 hover:border-accent-purple/40'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center px-4 py-1 rounded-full bg-gradient-accent text-white text-sm font-medium">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold bg-gradient-text bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>
                <CardDescription className="mt-4 text-base text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-accent-success mr-3 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-button hover:shadow-glow text-white' 
                      : 'border border-accent-purple/30 bg-gradient-glass hover:bg-gradient-accent/20 text-white hover:border-accent-purple/50'
                  } transition-all duration-300 hover:scale-105 rounded-xl`}
                  size="lg"
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}
