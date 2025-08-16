import { Navigation } from "@/components/Navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, DollarSign, Activity, Users, BarChart3 } from "lucide-react"

const Snapshot = () => {
  const marketMetrics = [
    { label: "Market Cap", value: "$2.4T", change: "+2.3%", trend: "up" },
    { label: "Volume", value: "$847B", change: "-1.2%", trend: "down" },
    { label: "Active Funds", value: "1,247", change: "+15", trend: "up" },
    { label: "Avg Return", value: "12.4%", change: "+0.8%", trend: "up" }
  ]

  const topPerformers = [
    { name: "Alpha Growth Fund", return: "18.7%", aum: "$2.3B" },
    { name: "Momentum Strategy", return: "15.2%", aum: "$1.8B" },
    { name: "Value Discovery", return: "13.9%", aum: "$3.1B" }
  ]

  const recentActivity = [
    { action: "New Fund Launch", fund: "NextGen Tech Fund", time: "2 hours ago" },
    { action: "Position Update", fund: "Global Macro Plus", time: "4 hours ago" },
    { action: "Risk Alert", fund: "Emerging Markets", time: "6 hours ago" }
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

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {marketMetrics.map((metric, index) => (
              <Card key={index} className="bg-gradient-glass border border-accent-purple/20 hover:shadow-glow transition-all duration-300">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Performers */}
            <Card className="bg-gradient-glass border border-accent-purple/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <BarChart3 className="h-5 w-5" />
                  Top Performers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topPerformers.map((fund, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-background/5 border border-accent-purple/10">
                    <div>
                      <div className="font-semibold text-white">{fund.name}</div>
                      <div className="text-sm text-muted-foreground">AUM: {fund.aum}</div>
                    </div>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                      +{fund.return}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-gradient-glass border border-accent-purple/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Activity className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background/5 border border-accent-purple/10">
                    <div className="flex-1">
                      <div className="font-semibold text-white">{activity.action}</div>
                      <div className="text-sm text-muted-foreground">{activity.fund}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Market Summary */}
          <Card className="mt-8 bg-gradient-glass border border-accent-purple/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <DollarSign className="h-5 w-5" />
                Market Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">847</div>
                  <div className="text-sm text-muted-foreground">Active Strategies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">$125B</div>
                  <div className="text-sm text-muted-foreground">Total AUM</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">89%</div>
                  <div className="text-sm text-muted-foreground">Risk-Adjusted Performance</div>
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