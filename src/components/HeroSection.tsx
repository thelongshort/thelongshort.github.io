import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, TrendingUp, BarChart3, Shield, Zap, Brain, Globe, Target, Layers, Activity, PieChart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-glow rounded-full blur-3xl animate-float" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-purple-glow rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-pink-glow rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(173,255,47,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(173,255,47,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <Badge variant="outline" className="bg-glass-primary backdrop-blur-xl border-primary/30 text-primary shadow-inner-glow">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Market Intelligence
            </Badge>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Hedge Fund</span>
                <span className="block bg-gradient-text bg-clip-text text-transparent">Intelligence</span>
                <span className="block text-foreground">Platform</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Leverage advanced AI to analyze market opportunities, track fund performance, and make data-driven investment decisions with unprecedented precision.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="glow" className="group">
                Access Platform
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="xl" variant="glass" className="group">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-success" />
                <span className="text-sm text-muted-foreground">Bank-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Real-Time Data</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Advanced Dashboard Preview */}
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className="relative bg-gradient-glass backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-glass">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Portfolio Overview</h3>
                  <p className="text-sm text-muted-foreground">Real-time analytics</p>
                </div>
                <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary">
                  <Activity className="w-3 h-3 mr-1" />
                  Live
                </Badge>
              </div>
              
              {/* Main Metric */}
              <div className="mb-8">
                <div className="text-3xl font-bold text-foreground mb-2">$847,329,581</div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-accent-success" />
                  <span className="text-accent-success font-medium">+12.4%</span>
                  <span className="text-muted-foreground text-sm">vs last month</span>
                </div>
              </div>
              
              {/* Mini Cards Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-glass-secondary backdrop-blur-sm rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-4 h-4 text-accent-purple" />
                    <span className="text-xs text-muted-foreground">AI Score</span>
                  </div>
                  <div className="text-xl font-bold text-foreground">94.2</div>
                  <div className="text-xs text-accent-success">+2.1</div>
                </div>
                
                <div className="bg-glass-secondary backdrop-blur-sm rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-accent-pink" />
                    <span className="text-xs text-muted-foreground">Sharpe Ratio</span>
                  </div>
                  <div className="text-xl font-bold text-foreground">3.47</div>
                  <div className="text-xs text-accent-success">+0.23</div>
                </div>
              </div>
              
              {/* Performance Chart Placeholder */}
              <div className="bg-glass-primary rounded-xl p-4 border border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-foreground">Performance</span>
                  <PieChart className="w-4 h-4 text-primary" />
                </div>
                <div className="h-16 bg-gradient-to-r from-primary/20 via-accent-purple/20 to-accent-pink/20 rounded-lg flex items-end p-2">
                  <div className="flex gap-1 w-full items-end">
                    {[0.3, 0.7, 0.4, 0.8, 0.6, 0.9, 0.5, 0.7, 0.8, 0.6].map((height, i) => (
                      <div key={i} className="bg-primary flex-1 rounded-sm opacity-80" style={{ height: `${height * 100}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating AI Assistant Card */}
            <div className="absolute -right-8 -top-8 bg-gradient-glass backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-purple w-64">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">AI Assistant</div>
                  <div className="text-xs text-muted-foreground">Market Analysis</div>
                </div>
              </div>
              <div className="text-sm text-foreground bg-glass-primary rounded-lg p-3 border border-white/5">
                "Based on current trends, consider increasing exposure to emerging markets by 3.2%"
              </div>
            </div>
            
            {/* Floating Metrics */}
            <div className="absolute -left-6 bottom-8 bg-gradient-glass backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-glass">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4 text-accent-cyan" />
                <span className="text-xs text-muted-foreground">Global Exposure</span>
              </div>
              <div className="text-lg font-bold text-foreground">73.2%</div>
            </div>
            
            <div className="absolute right-4 bottom-16 bg-gradient-glass backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-glass">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-4 h-4 text-accent-gold" />
                <span className="text-xs text-muted-foreground">Strategies</span>
              </div>
              <div className="text-lg font-bold text-foreground">127</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };