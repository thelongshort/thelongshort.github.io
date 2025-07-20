
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Long & Short has revolutionized our strategy development process. The hedge fund intelligence depth is unmatched in the industry.",
    author: "Marcus Chen",
    title: "Managing Partner",
    company: "Quantum Capital Management"
  },
  {
    quote: "The alpha discovery tools helped us identify market inefficiencies 3 months before our competitors. Game-changing insights.",
    author: "Sarah Rodriguez",
    title: "Chief Investment Officer",
    company: "Meridian Hedge Partners"
  },
  {
    quote: "Real-time strategy intelligence and risk analytics give us the competitive edge we need in today's volatile markets.",
    author: "David Park",
    title: "Portfolio Manager",
    company: "Apex Strategic Fund"
  }
]

export function TestimonialSection() {
  return (
    <section className="py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-accent-purple/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-accent-cyan/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by
            <span className="block bg-gradient-text bg-clip-text text-transparent">
              Market Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what top hedge fund professionals are saying about our intelligence platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lift transition-all duration-300 hover:-translate-y-1 bg-gradient-glass backdrop-blur-sm border border-accent-purple/20 hover:border-accent-cyan/30 rounded-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-accent-cyan mb-6 opacity-60" />
                <blockquote className="text-white mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-accent-purple/30 pt-6">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  <div className="text-sm text-accent-cyan font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
