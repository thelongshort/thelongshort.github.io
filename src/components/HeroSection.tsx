import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 1200 800" className="absolute inset-0 w-full h-full opacity-40">
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(220 70% 50%)" stopOpacity="0.6" />
              <stop offset="50%" stopColor="hsl(45 100% 65%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(220 60% 25%)" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(45 100% 65%)" stopOpacity="0.4" />
              <stop offset="50%" stopColor="hsl(220 70% 50%)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(210 15% 70%)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Flowing wave paths */}
          <path 
            d="M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z" 
            fill="url(#wave1)"
            className="animate-pulse"
          />
          <path 
            d="M0,500 C400,300 700,700 1200,400 L1200,800 L0,800 Z" 
            fill="url(#wave2)"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          
          {/* Institutional grid overlay */}
          <pattern id="grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0,60 L60,0" stroke="hsl(45 100% 65%)" strokeWidth="0.5" opacity="0.2"/>
            <path d="M0,0 L60,60" stroke="hsl(45 100% 65%)" strokeWidth="0.5" opacity="0.2"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" opacity="0.1"/>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center">
        <div className="w-full max-w-5xl">
          {/* Notification Badge */}
          <div className="mb-8">
            <Badge variant="secondary" className="bg-card/40 text-accent-gold border-accent-gold/30 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              $2.3T in institutional assets tracked
            </Badge>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-tight mb-8">
            <span className="block text-white mb-2">Institutional capital</span>
            <span className="block bg-gradient-text bg-clip-text text-transparent">
              allocation intelligence
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-accent-platinum mb-12 max-w-3xl leading-relaxed">
            Advanced insights into institutional investor transactions, asset allocation strategies, 
            and capital flow patterns across global markets.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Button 
              size="lg"
              className="bg-gradient-button hover:shadow-gold text-accent-foreground font-semibold px-10 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              ACCESS PLATFORM
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <button className="text-accent-platinum hover:text-white font-medium text-lg underline underline-offset-4 decoration-accent-gold transition-colors">
              VIEW SAMPLE INSIGHTS
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}