
import { Button } from "@/components/ui/button"
import { Link, useLocation } from "react-router-dom"
import { MetricsCarousel } from "./MetricsCarousel"

export function Navigation() {
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <MetricsCarousel />
      <nav className="bg-gradient-glass backdrop-blur-md border-b border-accent-purple/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-display font-bold bg-gradient-text bg-clip-text text-transparent">
              Long & Short
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-gradient-accent text-white shadow-glow' 
                  : 'text-muted-foreground hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/analysis" 
              className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive('/analysis') 
                  ? 'bg-gradient-accent text-white shadow-glow' 
                  : 'text-muted-foreground hover:text-white hover:bg-white/10'
              }`}
            >
              Market Analysis
            </Link>
            <Link 
              to="/events" 
              className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive('/events') 
                  ? 'bg-gradient-accent text-white shadow-glow' 
                  : 'text-muted-foreground hover:text-white hover:bg-white/10'
              }`}
            >
              Events
            </Link>
            <Link 
              to="/key-deals" 
              className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive('/key-deals') 
                  ? 'bg-gradient-accent text-white shadow-glow' 
                  : 'text-muted-foreground hover:text-white hover:bg-white/10'
              }`}
            >
              Key Moves
            </Link>
          </div>
          
          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex text-muted-foreground hover:text-white hover:bg-white/10">
              Sign In
            </Button>
            <Button className="bg-gradient-button hover:shadow-purple text-white font-semibold transition-all duration-300 hover:scale-105 rounded-xl">
              Access Platform
            </Button>
          </div>
        </div>
      </div>
      </nav>
    </div>
  )
}
