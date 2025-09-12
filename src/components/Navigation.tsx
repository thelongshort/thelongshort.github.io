
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, LogOut, Shield, User } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { MetricsCarousel } from "./MetricsCarousel"
import { useAuth } from "@/hooks/useAuth"

export function Navigation() {
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <MetricsCarousel />
      <nav className="bg-gradient-glass backdrop-blur-xl border-b border-white/10 shadow-glass">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <div className="text-2xl font-display font-bold text-primary group-hover:scale-105 transition-transform">
              Long & Short
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1">
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
          </div>
          
          {/* Search and Auth Area */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search"
                placeholder="Search..."
                className="pl-10 w-64 bg-glass-primary backdrop-blur-xl border-white/10 focus:border-primary/40 rounded-xl"
              />
            </div>
            <AuthSection />
          </div>
        </div>
      </div>
      </nav>
    </div>
  )
}

function AuthSection() {
  const { user, isAdmin, signOut } = useAuth()

  if (!user) {
    return (
      <Link to="/auth">
        <Button variant="outline" size="sm">
          <User className="w-4 h-4 mr-2" />
          Sign In
        </Button>
      </Link>
    )
  }

  return (
    <div className="flex items-center gap-2">
      {isAdmin && (
        <Link to="/admin">
          <Button variant="outline" size="sm">
            <Shield className="w-4 h-4 mr-2" />
            Admin
          </Button>
        </Link>
      )}
      <Button variant="outline" size="sm" onClick={signOut}>
        <LogOut className="w-4 h-4 mr-2" />
        Sign Out
      </Button>
    </div>
  )
}
