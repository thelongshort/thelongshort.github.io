import { Navigation } from "@/components/Navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, DollarSign, Activity, Users, BarChart3 } from "lucide-react"
import { KeyDealsFilter } from "@/components/KeyDealsFilter"

const Snapshot = () => {
  const primaryMetrics = [
    { label: "Assets Under Management", value: "$847.2B", change: "+12.3%", trend: "up", icon: DollarSign },
    { label: "Net Capital Flow", value: "+$24.8B", change: "+8.7%", trend: "up", icon: TrendingUp },
    { label: "Active Funds", value: "2,847", change: "+127", trend: "up", icon: Activity },
    { label: "Average Fund Return", value: "14.7%", change: "+2.1%", trend: "up", icon: BarChart3 }
  ]

  const riskMetrics = [
    { label: "Volatility (Std Dev)", value: "12.4%", change: "-0.8%", trend: "down" },
    { label: "Sharpe Ratio", value: "1.84", change: "+0.12", trend: "up" },
    { label: "Average Leverage", value: "2.3x", change: "-0.1x", trend: "down" },
    { label: "Top Holdings %", value: "18.5%", change: "+1.2%", trend: "up" }
  ]

  const flowMetrics = [
    { label: "Redemptions %", value: "3.2%", change: "-0.5%", trend: "down" },
    { label: "New Subscriptions", value: "$18.7B", change: "+15.2%", trend: "up" },
    { label: "Fund Closures", value: "23", change: "-8", trend: "down" },
    { label: "New Launches", value: "47", change: "+12", trend: "up" }
  ]

  const trendingManagers = [
    { name: "Bridgewater Associates", aum: "$140B", return: "16.8%", flow: "+$4.2B" },
    { name: "Renaissance Technologies", aum: "$130B", return: "24.3%", flow: "+$3.8B" },
    { name: "Two Sigma", aum: "$60B", return: "18.9%", flow: "+$2.1B" },
    { name: "Citadel", aum: "$59B", return: "15.7%", flow: "+$1.9B" },
    { name: "D.E. Shaw", aum: "$55B", return: "19.4%", flow: "+$1.7B" },
    { name: "Millennium Management", aum: "$57B", return: "17.2%", flow: "+$1.5B" },
    { name: "Elliott Management", aum: "$56B", return: "13.8%", flow: "+$1.4B" },
    { name: "AQR Capital", aum: "$71B", return: "12.9%", flow: "+$1.2B" },
    { name: "Paulson & Co", aum: "$8B", return: "22.1%", flow: "+$1.1B" },
    { name: "Pershing Square", aum: "$8.2B", return: "20.7%", flow: "+$1.0B" }
  ]

  const trendingFunds = [
    { name: "Quantum Macro Strategy", manager: "Bridgewater", return: "28.4%", sharpe: "2.14" },
    { name: "AI-Driven Alpha", manager: "Two Sigma", return: "26.7%", sharpe: "2.08" },
    { name: "Global Event Driven", manager: "Elliott", return: "24.9%", sharpe: "1.97" },
    { name: "Multi-Manager Platform", manager: "Citadel", return: "23.2%", sharpe: "1.89" },
    { name: "Systematic Equity", manager: "Renaissance", return: "22.8%", sharpe: "1.85" },
    { name: "Credit Opportunities", manager: "Apollo", return: "21.5%", sharpe: "1.78" },
    { name: "Emerging Markets", manager: "Tiger Global", return: "20.9%", sharpe: "1.71" },
    { name: "Volatility Arbitrage", manager: "Susquehanna", return: "19.7%", sharpe: "1.65" },
    { name: "Distressed Securities", manager: "Oaktree", return: "18.3%", sharpe: "1.58" },
    { name: "Convertible Arbitrage", manager: "Citadel", return: "17.1%", sharpe: "1.52" }
  ]

  return (
    <div className="min-h-screen font-primary pt-24">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
              Market Snapshot
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-time overview of fund performance, market metrics, and key insights
            </p>
          </div>

          <KeyDealsFilter />

          {/* Primary Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {primaryMetrics.map((metric, index) => {
              const IconComponent = metric.icon
              return (
                <Card key={index} className="bg-gradient-glass border border-accent-purple/20 hover:shadow-glow transition-all duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.label}
                    </CardTitle>
                    <IconComponent className="h-4 w-4 text-accent-purple" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <p className={`text-xs ${metric.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                      {metric.change} from last period
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Risk & Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {riskMetrics.map((metric, index) => (
              <Card key={index} className="bg-gradient-glass border border-accent-purple/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.label}
                  </CardTitle>
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-400" />
                  )}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <p className={`text-xs ${metric.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                    {metric.change} from last period
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Flow Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {flowMetrics.map((metric, index) => (
              <Card key={index} className="bg-gradient-glass border border-accent-purple/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.label}
                  </CardTitle>
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-400" />
                  )}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <p className={`text-xs ${metric.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                    {metric.change} from last period
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
            {/* Trending Managers */}
            <Card className="bg-gradient-glass border border-accent-purple/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Users className="h-5 w-5" />
                  Trending Managers (Top 10)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                {trendingManagers.map((manager, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/5 border border-accent-purple/10 hover:bg-background/10 transition-colors">
                    <div className="flex-1">
                      <div className="font-semibold text-white text-sm">{manager.name}</div>
                      <div className="text-xs text-muted-foreground">AUM: {manager.aum} • Flow: {manager.flow}</div>
                    </div>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                      {manager.return}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Trending Funds */}
            <Card className="bg-gradient-glass border border-accent-purple/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <BarChart3 className="h-5 w-5" />
                  Trending Funds (Top 10)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                {trendingFunds.map((fund, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/5 border border-accent-purple/10 hover:bg-background/10 transition-colors">
                    <div className="flex-1">
                      <div className="font-semibold text-white text-sm">{fund.name}</div>
                      <div className="text-xs text-muted-foreground">{fund.manager} • Sharpe: {fund.sharpe}</div>
                    </div>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                      {fund.return}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Market Summary */}
          <Card className="bg-gradient-glass border border-accent-purple/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <DollarSign className="h-5 w-5" />
                Market Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">2,847</div>
                  <div className="text-sm text-muted-foreground">Active Strategies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">$847B</div>
                  <div className="text-sm text-muted-foreground">Total AUM</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1.84</div>
                  <div className="text-sm text-muted-foreground">Avg Sharpe Ratio</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">2.3x</div>
                  <div className="text-sm text-muted-foreground">Avg Leverage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">3.2%</div>
                  <div className="text-sm text-muted-foreground">Redemption Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Snapshot