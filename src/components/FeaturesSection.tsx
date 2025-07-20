
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Search, BarChart3, Building2, Target, Activity } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Strategy Insights",
    description: "Deep dive into hedge fund strategies, positioning, and systematic approaches across all major market segments.",
    color: "text-accent-blue"
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Real-time analysis of fund moves, market impact, and emerging opportunities in the hedge fund landscape.",
    color: "text-accent-success"
  },
  {
    icon: Building2,
    title: "Performance Analytics",
    description: "Track fund performance, risk metrics, alpha generation, and comprehensive benchmarking analysis.",
    color: "text-accent-purple"
  },
  {
    icon: BarChart3,
    title: "Position Tracking",
    description: "Monitor key holdings, portfolio changes, and strategic shifts across institutional hedge fund portfolios.",
    color: "text-accent-cyan"
  },
  {
    icon: Target,
    title: "Risk Analysis",
    description: "Comprehensive risk assessment, stress testing, and volatility modeling for informed decision making.",
    color: "text-accent-blue"
  },
  {
    icon: Activity,
    title: "Alpha Opportunities",
    description: "Identify emerging opportunities, market inefficiencies, and systematic alpha generation strategies.",
    color: "text-accent-success"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-radial from-accent-purple/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-radial from-accent-cyan/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Intelligence That 
            <span className="block bg-gradient-text bg-clip-text text-transparent">
              Moves Markets
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive hedge fund intelligence platform providing the insights you need 
            to stay ahead in a competitive market.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={feature.title}
                className="group hover:shadow-lift transition-all duration-500 hover:-translate-y-2 bg-gradient-glass backdrop-blur-sm border border-accent-purple/20 hover:border-accent-cyan/40 rounded-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-glass backdrop-blur-sm border border-accent-purple/30">
            <span className="text-sm text-muted-foreground">
              And much more with our comprehensive hedge fund analytics suite
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
