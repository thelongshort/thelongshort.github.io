
import { TrendingUp, TrendingDown } from "lucide-react"

const metricsData = [
  {
    label: "HEDGE FUND AUM",
    value: "$4.2T",
    change: "+12.4%",
    isPositive: true
  },
  {
    label: "AVERAGE FUND SIZE",
    value: "$847M",
    change: "+8.7%",
    isPositive: true
  },
  {
    label: "NET PERFORMANCE",
    value: "11.3%",
    change: "+3.2%",
    isPositive: true
  },
  {
    label: "SHARPE RATIO",
    value: "1.24",
    change: "+0.18",
    isPositive: true
  },
  {
    label: "ACTIVE STRATEGIES",
    value: "12,400+",
    change: "+18.6%",
    isPositive: true
  },
  {
    label: "ALPHA GENERATION",
    value: "4.7%",
    change: "+1.2%",
    isPositive: true
  },
  {
    label: "MARKET EXPOSURE",
    value: "73%",
    change: "-2.1%",
    isPositive: false
  },
  {
    label: "NEW LAUNCHES YTD",
    value: "1,847",
    change: "+24.3%",
    isPositive: true
  }
]

export function MetricsCarousel() {
  // Duplicate the data to create seamless loop
  const duplicatedMetrics = [...metricsData, ...metricsData]

  return (
    <div className="bg-gradient-to-r from-accent-navy via-secondary to-accent-navy border-b border-accent-purple/30 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll items-center whitespace-nowrap">
          {duplicatedMetrics.map((metric, index) => (
            <div key={index} className="flex items-center px-6 py-3 min-w-fit">
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground text-sm font-medium">
                  {metric.label}
                </span>
                <span className="text-white font-bold text-sm">
                  {metric.value}
                </span>
                <div className={`flex items-center space-x-1 ${
                  metric.isPositive ? 'text-accent-success' : 'text-accent-danger'
                }`}>
                  {metric.isPositive ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  <span className="text-xs font-medium">{metric.change}</span>
                </div>
              </div>
              <div className="w-px h-4 bg-accent-purple/30 ml-6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
