import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"

const upcomingEvents = [
  {
    title: "Global Institutional Allocators Summit",
    date: "March 15-17, 2024",
    location: "New York, NY",
    attendees: "800+",
    description: "Premier gathering of institutional investors, pension funds, and endowments discussing asset allocation strategies and market outlook.",
    type: "Summit"
  },
  {
    title: "Alternative Investment Conference",
    date: "April 8, 2024",
    location: "London, UK",
    attendees: "600+",
    description: "Deep dive into alternative investment strategies with leading institutional investors and fund managers.",
    type: "Conference"
  },
  {
    title: "Sovereign Wealth Fund Forum",
    date: "April 22, 2024",
    location: "Singapore",
    attendees: "300+",
    description: "Exclusive forum for sovereign wealth funds and large institutional investors to share insights on global capital allocation.",
    type: "Forum"
  }
]

export default function Events() {
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
              Institutional
              <span className="block bg-gradient-text bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-accent-platinum mb-12 leading-relaxed">
              Connect with the global institutional investment community through premier 
              conferences, forums, and exclusive networking opportunities.
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
              Premier gatherings for institutional investment professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={index}
                className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-accent-gold/20 overflow-hidden"
              >
                <CardHeader className="relative">
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-accent-gold/10 text-accent-gold rounded-full text-xs font-medium">
                      {event.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-white pr-20">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-accent-platinum leading-relaxed">
                    {event.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-accent-platinum">
                      <Calendar className="w-4 h-4 mr-2 text-accent-gold" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-accent-platinum">
                      <MapPin className="w-4 h-4 mr-2 text-accent-blue" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-accent-platinum">
                      <Users className="w-4 h-4 mr-2 text-accent-navy" />
                      {event.attendees} expected attendees
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 bg-gradient-button hover:shadow-gold text-accent-foreground transition-all duration-300 group-hover:scale-105">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Event Categories
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Global Summits", count: "8", color: "accent-gold" },
              { name: "Regional Forums", count: "12", color: "accent-blue" },
              { name: "Sector Focus", count: "6", color: "accent-platinum" },
              { name: "Masterclasses", count: "15", color: "accent-navy" }
            ].map((category, index) => (
              <div 
                key={category.name}
                className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-lg shadow-lift border border-accent-gold/20 hover:shadow-gold transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`text-4xl font-bold text-${category.color} mb-2`}>
                  {category.count}
                </div>
                <div className="text-accent-platinum font-medium">
                  {category.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}