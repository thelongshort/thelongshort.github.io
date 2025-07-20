import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Building2, DollarSign, ArrowRight, ExternalLink } from "lucide-react"

const keyTransactions = [
  {
    title: "Citadel Securities Block Trade Execution",
    amount: "$47.2B",
    date: "March 2024",
    sector: "Equity Markets",
    description: "Citadel Securities executes record block trade for major pension fund rebalancing, demonstrating market-making capabilities at scale.",
    status: "Executed",
    allocator: "Citadel Securities",
    type: "Block Trade"
  },
  {
    title: "Millennium Management Tech Sector Rotation",
    amount: "$18.4B",
    date: "February 2024",
    sector: "Technology",
    description: "Millennium reallocates capital from growth tech to value tech opportunities, reducing gross exposure by 15%.",
    status: "Completed",
    allocator: "Millennium",
    type: "Sector Rotation"
  },
  {
    title: "Renaissance Technologies Medallion Fund",
    amount: "$23.1B",
    date: "January 2024",
    sector: "Quantitative",
    description: "Medallion Fund achieves 76% net return for 2023, continuing exceptional performance streak in systematic strategies.",
    status: "Reported",
    allocator: "Renaissance",
    type: "Performance"
  },
  {
    title: "Bridgewater Pure Alpha Fund Flows",
    amount: "$12.8B",
    date: "December 2023",
    sector: "Macro",
    description: "Bridgewater Pure Alpha receives significant institutional inflows following strong macro positioning during rate environment shifts.",
    status: "Completed",
    allocator: "Bridgewater",
    type: "Capital Raise"
  }
]

export default function KeyDeals() {
  return (
    <div className="min-h-screen font-primary bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-background">
        {/* Sophisticated Background */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 1200 800" className="absolute inset-0 w-full h-full">
            <path d="M0,600 C300,400 700,800 1200,500 L1200,800 L0,800 Z" fill="url(#keyTransactionsWave)" />
            <defs>
              <linearGradient id="keyTransactionsWave" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(220 70% 50%)" stopOpacity="0.4" />
                <stop offset="50%" stopColor="hsl(45 100% 65%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(220 60% 25%)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Elegant Floating Elements */}
        <div className="absolute top-16 right-16 w-28 h-28 bg-accent-gold/10 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute top-40 left-20 w-20 h-40 bg-accent-blue/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-accent-platinum/10 rounded-xl -rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Key
              <span className="block bg-gradient-text bg-clip-text text-transparent">
                Moves
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-accent-platinum mb-12 leading-relaxed">
              Track major hedge fund transactions, position changes, and strategic moves 
              driving alpha generation across global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Transaction Analytics Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-lg shadow-lift border border-accent-gold/20">
              <div className="text-4xl font-bold text-white mb-2">
                $2.3T
              </div>
              <div className="text-accent-platinum font-medium">Total AUM Tracked</div>
            </div>
            <div className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-lg shadow-lift border border-accent-gold/20">
              <div className="text-4xl font-bold text-accent-gold mb-2">
                1,847
              </div>
              <div className="text-accent-platinum font-medium">Allocations</div>
            </div>
            <div className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-lg shadow-lift border border-accent-gold/20">
              <div className="text-4xl font-bold text-accent-blue mb-2">
                67%
              </div>
              <div className="text-accent-platinum font-medium">Alternative Assets</div>
            </div>
            <div className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-lg shadow-lift border border-accent-gold/20">
              <div className="text-4xl font-bold text-accent-platinum mb-2">
                +18%
              </div>
              <div className="text-accent-platinum font-medium">YoY Flow Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Key Transactions */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Recent Major Allocations
            </h2>
            <p className="text-xl text-accent-platinum">
              Latest significant institutional investor moves and capital allocations
            </p>
          </div>

          <div className="space-y-6">
            {keyTransactions.map((transaction, index) => (
              <Card 
                key={index}
                className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-accent-gold/20"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <CardTitle className="text-2xl font-bold text-white">
                          {transaction.title}
                        </CardTitle>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          transaction.status === 'Completed' 
                            ? 'bg-accent-gold/10 text-accent-gold' 
                            : 'bg-accent-blue/10 text-accent-blue'
                        }`}>
                          {transaction.status}
                        </div>
                      </div>
                      <CardDescription className="text-accent-platinum leading-relaxed mb-4">
                        {transaction.description}
                      </CardDescription>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-3xl font-bold text-white">
                        {transaction.amount}
                      </div>
                      <div className="text-sm text-accent-platinum">{transaction.date}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div>
                      <div className="text-sm text-accent-platinum mb-1">Asset Class</div>
                      <div className="flex items-center">
                        <Building2 className="w-4 h-4 mr-2 text-accent-gold" />
                        <span className="font-medium text-white">{transaction.sector}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-accent-platinum mb-1">Type</div>
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2 text-accent-blue" />
                        <span className="font-medium text-white">{transaction.type}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-accent-platinum mb-1">Allocator</div>
                      <div className="font-medium text-white">{transaction.allocator}</div>
                    </div>
                    <div className="flex justify-end">
                      <Button 
                        variant="outline" 
                        className="border-accent-gold/30 bg-card hover:bg-accent-gold/10 text-accent-gold hover:text-accent-gold transition-all duration-300"
                      >
                        View Details
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Allocation Flow Trends */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Market Trends
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-lift border border-accent-gold/20">
              <h3 className="text-2xl font-bold text-white mb-6">Allocation by Asset Class</h3>
              <div className="space-y-4">
                {[
                  { sector: "Private Equity", percentage: 42, color: "accent-gold" },
                  { sector: "Real Estate", percentage: 28, color: "accent-blue" },
                  { sector: "Infrastructure", percentage: 18, color: "accent-platinum" },
                  { sector: "Hedge Funds", percentage: 12, color: "accent-navy" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 bg-${item.color} rounded-full mr-3`}></div>
                      <span className="text-white font-medium">{item.sector}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 h-2 bg-card rounded-full overflow-hidden w-24">
                        <div 
                          className={`h-full bg-${item.color} rounded-full`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-accent-platinum font-medium w-8">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-lift border border-accent-gold/20">
              <h3 className="text-2xl font-bold text-white mb-6">Capital Flow Trends</h3>
              <div className="h-48 bg-gradient-to-br from-accent-gold/10 to-accent-blue/10 rounded-lg flex items-end justify-around p-4">
                <div className="w-8 bg-gradient-gold h-24 rounded-t"></div>
                <div className="w-8 bg-gradient-gold h-32 rounded-t"></div>
                <div className="w-8 bg-gradient-gold h-28 rounded-t"></div>
                <div className="w-8 bg-gradient-gold h-36 rounded-t"></div>
                <div className="w-8 bg-gradient-gold h-40 rounded-t"></div>
                <div className="w-8 bg-gradient-gold h-44 rounded-t"></div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-accent-platinum text-sm">Sustained growth in institutional allocations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}