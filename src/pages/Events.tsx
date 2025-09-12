import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users, ArrowRight, Trophy, Briefcase, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { supabase } from "@/integrations/supabase/client"
import { format } from "date-fns"
import eventPlaceholder from "@/assets/event-placeholder.jpg"

interface Event {
  id: string
  title: string
  description: string | null
  event_type: string
  start_date: string
  end_date: string | null
  location: string | null
  venue: string | null
  image_url: string | null
  registration_url: string | null
  price: number | null
  capacity: number | null
  organizer: string | null
  featured: boolean
  published: boolean
  created_at: string
  updated_at: string
}

const eventCategories = [
  { name: "Multi-Strategy Events", count: "12", color: "accent-gold", icon: Trophy },
  { name: "Quant Forums", count: "8", color: "accent-blue", icon: Briefcase },
  { name: "Equity Conferences", count: "15", color: "accent-platinum", icon: Calendar },
  { name: "Credit Symposiums", count: "6", color: "accent-navy", icon: Users }
]

export default function Events() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchEvents() {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .eq('published', true)
          .gte('start_date', new Date().toISOString())
          .order('start_date', { ascending: true })

        if (error) throw error
        setEvents(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch events')
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const formatEventDate = (startDate: string, endDate: string | null) => {
    const start = new Date(startDate)
    if (endDate) {
      const end = new Date(endDate)
      if (start.toDateString() === end.toDateString()) {
        return format(start, 'MMMM d, yyyy')
      } else {
        return `${format(start, 'MMMM d')}-${format(end, 'd, yyyy')}`
      }
    }
    return format(start, 'MMMM d, yyyy')
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = eventPlaceholder
  }
  return (
    <div className="min-h-screen font-primary bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-background">
        {/* Sophisticated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 1200 800" className="absolute inset-0 w-full h-full">
            <path d="M0,300 C300,500 600,100 1200,400 L1200,800 L0,800 Z" fill="url(#eventsWave)" />
            <defs>
              <linearGradient id="eventsWave" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(220 70% 50%)" stopOpacity="0.4" />
                <stop offset="50%" stopColor="hsl(45 100% 65%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(220 60% 25%)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Elegant Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-16 bg-accent-gold/10 rounded-full rotate-45 animate-float"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-accent-blue/10 rounded-2xl -rotate-12 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-accent-platinum/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Hedge Fund
              <span className="block bg-gradient-text bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-accent-platinum mb-12 leading-relaxed">
              Connect with leading hedge fund managers and institutional investors through premier 
              conferences, strategy forums, and exclusive networking opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-accent-platinum">
              Premier gatherings for hedge fund professionals and institutional investors
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-accent-gold" />
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-400 text-lg">Error loading events: {error}</p>
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-accent-platinum text-lg">No upcoming events found.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {events.map((event) => (
                <Card 
                  key={event.id}
                  className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-accent-gold/20 overflow-hidden"
                >
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image_url || eventPlaceholder}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute top-4 right-4 space-y-2">
                      <span className="block px-3 py-1 bg-accent-gold/90 backdrop-blur-sm text-accent-foreground rounded-full text-xs font-medium">
                        {event.event_type}
                      </span>
                      {event.featured && (
                        <span className="block px-3 py-1 bg-accent-blue/90 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <CardHeader className="relative pb-4">
                    <CardTitle className="text-xl font-bold text-white leading-tight">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {event.description && (
                      <CardDescription className="text-accent-platinum leading-relaxed">
                        {event.description}
                      </CardDescription>
                    )}
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-accent-platinum">
                        <Calendar className="w-4 h-4 mr-2 text-accent-gold" />
                        {formatEventDate(event.start_date, event.end_date)}
                      </div>
                      {event.location && (
                        <div className="flex items-center text-sm text-accent-platinum">
                          <MapPin className="w-4 h-4 mr-2 text-accent-blue" />
                          {event.location}
                        </div>
                      )}
                      {event.capacity && (
                        <div className="flex items-center text-sm text-accent-platinum">
                          <Users className="w-4 h-4 mr-2 text-accent-navy" />
                          Up to {event.capacity} attendees
                        </div>
                      )}
                      {event.organizer && (
                        <div className="flex items-center text-sm text-accent-platinum">
                          <Briefcase className="w-4 h-4 mr-2 text-accent-platinum" />
                          Organized by {event.organizer}
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      className="w-full mt-6 bg-gradient-button hover:shadow-gold text-accent-foreground transition-all duration-300 group-hover:scale-105"
                      onClick={() => event.registration_url && window.open(event.registration_url, '_blank')}
                      disabled={!event.registration_url}
                    >
                      {event.registration_url ? 'Register Now' : 'Registration Coming Soon'}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Event Categories
            </h2>
            <p className="text-xl text-accent-platinum">
              Specialized events by hedge fund strategy and focus area
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {eventCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={category.name}
                  className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-lg shadow-lift border border-accent-gold/20 hover:shadow-gold transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className={`w-8 h-8 text-${category.color}`} />
                  </div>
                  <div className={`text-4xl font-bold text-${category.color} mb-2`}>
                    {category.count}
                  </div>
                  <div className="text-accent-platinum font-medium">
                    {category.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Networking Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Why Attend Our Events
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-lg shadow-lift border border-accent-gold/20">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Elite Network Access</h3>
              <p className="text-accent-platinum">Connect with top-tier hedge fund managers, institutional investors, and industry thought leaders.</p>
            </div>
            
            <div className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-lg shadow-lift border border-accent-gold/20">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strategy Insights</h3>
              <p className="text-accent-platinum">Gain exclusive insights into successful hedge fund strategies and market positioning techniques.</p>
            </div>
            
            <div className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-lg shadow-lift border border-accent-gold/20">
              <div className="w-16 h-16 bg-accent-platinum/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-accent-platinum" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Deal Flow Opportunities</h3>
              <p className="text-accent-platinum">Discover investment opportunities and potential partnerships through curated networking sessions.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}