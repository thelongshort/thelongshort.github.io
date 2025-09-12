
import { Button } from "@/components/ui/button"
import { Link, useLocation } from "react-router-dom"
import { MetricsCarousel } from "./MetricsCarousel"

export function Navigation() {
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <MetricsCarousel />
      <nav className="bg-gradient-glass backdrop-blur-xl border-b border-white/10 shadow-glass">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="text-2xl font-display font-bold text-primary group-hover:scale-105 transition-transform">
              Long & Short
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
                isActive('/') 
                  ? 'bg-primary text-primary-foreground shadow-neon' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-glass-accent backdrop-blur-sm'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/analysis" 
              className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
                isActive('/analysis') 
                  ? 'bg-primary text-primary-foreground shadow-neon' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-glass-accent backdrop-blur-sm'
              }`}
            >
              Market Analysis
            </Link>
            <Link 
              to="/events" 
              className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
                isActive('/events') 
                  ? 'bg-primary text-primary-foreground shadow-neon' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-glass-accent backdrop-blur-sm'
              }`}
            >
              Events
            </Link>
            <Link 
              to="/key-deals" 
              className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
                isActive('/key-deals') 
                  ? 'bg-primary text-primary-foreground shadow-neon' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-glass-accent backdrop-blur-sm'
              }`}
            >
              Key Moves
            </Link>
            <Link 
              to="/snapshot" 
              className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
                isActive('/snapshot') 
                  ? 'bg-primary text-primary-foreground shadow-neon' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-glass-accent backdrop-blur-sm'
              }`}
            >
              Snapshot
            </Link>
          </div>
          
          {/* CTA Button */}
          <div className="flex items-center space-x-3">
            <Button variant="glass" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button variant="glow" size="lg">
              Access Platform
            </Button>
          </div>
        </div>
      </div>
      </nav>
    </div>
  )
}
