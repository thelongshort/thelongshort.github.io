
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-gradient-hero border-t border-accent-purple/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent mb-4">
              Long & Short
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The premier hedge fund intelligence platform providing deep insights 
              on strategies, market positioning, and alpha opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent-cyan transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent-cyan transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent-cyan transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Strategy Intelligence</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Risk Analytics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Alpha Discovery</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">API Access</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Research</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-accent-purple/30" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Long & Short. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="/admin" className="text-muted-foreground hover:text-white transition-colors text-sm">
              Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
