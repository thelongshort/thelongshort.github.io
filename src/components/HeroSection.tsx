
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, ArrowRight, BarChart3, Target, Activity } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-accent rounded-full blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent-cyan/30 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-accent-purple/40 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid pattern overlay */}
        <svg viewBox="0 0 1200 800" className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="modernGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0,60 L60,0" stroke="hsl(var(--accent-purple))" strokeWidth="0.5"/>
              <path d="M0,0 L60,60" stroke="hsl(var(--accent-cyan))" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#modernGrid)"/>
        </svg>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-radial from-accent-purple/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-radial from-accent-cyan/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Notification Badge */}
            <div className="inline-block">
              <Badge variant="secondary" className="bg-gradient-glass backdrop-blur-sm text-accent-cyan border-accent-cyan/30 px-4 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                $4.2T in hedge fund assets tracked
              </Badge>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                <span className="block text-white mb-2">Capitalize on</span>
                <span className="block bg-gradient-text bg-clip-text text-transparent">
                  Hedge Fund Intelligence
                </span>
              </h1>
            </div>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              Join Long & Short to tap into market-moving strategies and start earning superior insights today.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-6 pt-4">
              <Button 
                size="lg"
                className="bg-gradient-button hover:shadow-glow text-white font-semibold px-10 py-6 text-lg transition-all duration-300 hover:scale-105 rounded-xl"
              >
                Join Long & Short Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <button className="text-accent-cyan hover:text-white font-medium text-lg underline underline-offset-4 decoration-accent-cyan transition-colors">
                View Sample Intelligence
              </button>
            </div>
          </div>
          
          {/* Right Visual Elements */}
          <div className="relative lg:flex hidden items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Main floating card */}
              <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-accent-purple/20 animate-float">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Portfolio Alpha</h3>
                    <div className="flex items-center text-accent-success">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">+14.7%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Long Positions</span>
                      <span className="text-white font-medium">67%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Short Positions</span>
                      <span className="text-white font-medium">33%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-gradient-accent h-2 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating mini cards */}
              <div className="absolute -top-4 -right-4 bg-gradient-glass backdrop-blur-sm rounded-xl p-4 shadow-glass border border-accent-cyan/20 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-accent-cyan" />
                  <span className="text-white font-medium text-sm">Risk: 0.24</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-glass backdrop-blur-sm rounded-xl p-4 shadow-glass border border-accent-purple/20 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-accent-purple" />
                  <span className="text-white font-medium text-sm">Sharpe: 1.89</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-8 bg-gradient-glass backdrop-blur-sm rounded-xl p-4 shadow-glass border border-accent-success/20 animate-float" style={{ animationDelay: '3s' }}>
                <div className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-accent-success" />
                  <span className="text-white font-medium text-sm">Vol: 12.3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
