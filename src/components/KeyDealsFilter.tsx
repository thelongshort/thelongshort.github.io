import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"

const regions = [
  "All Regions",
  "North America",
  "Europe", 
  "Asia Pacific",
  "Emerging Asia",
  "Latin America",
  "Middle East & Africa"
]

const countriesByRegion = {
  "North America": ["United States", "Canada", "Mexico"],
  "Europe": ["United Kingdom", "Germany", "France", "Switzerland", "Netherlands", "Italy", "Spain", "Sweden", "Denmark", "Norway"],
  "Asia Pacific": ["Japan", "Australia", "South Korea", "New Zealand", "Taiwan", "Hong Kong", "Singapore"],
  "Emerging Asia": ["China", "India", "Thailand", "Malaysia", "Indonesia", "Philippines", "Vietnam"],
  "Latin America": ["Brazil", "Argentina", "Chile", "Colombia", "Peru", "Mexico"],
  "Middle East & Africa": ["UAE", "Saudi Arabia", "Qatar", "South Africa", "Israel", "Turkey", "Egypt", "Nigeria"]
}

const hedgeFundTypes = [
  "All Types",
  "Global Macro",
  "Long/Short Equity", 
  "Market Neutral / Quant",
  "Event-Driven",
  "Distressed / Credit",
  "Multi-Strategy",
  "Activist",
  "Relative Value / Arbitrage",
  "Commodity / Managed Futures (CTA)",
  "Emerging Markets"
]

interface KeyDealsFilterProps {
  onFilterChange?: (filters: {
    region: string
    country: string
    type: string
  }) => void
}

export function KeyDealsFilter({ onFilterChange }: KeyDealsFilterProps) {
  const [selectedRegion, setSelectedRegion] = useState("All Regions")
  const [selectedCountry, setSelectedCountry] = useState("All Countries")
  const [selectedType, setSelectedType] = useState("All Types")

  const availableCountries = selectedRegion === "All Regions" 
    ? ["All Countries"] 
    : ["All Countries", ...countriesByRegion[selectedRegion as keyof typeof countriesByRegion] || []]

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region)
    setSelectedCountry("All Countries")
    onFilterChange?.({
      region,
      country: "All Countries",
      type: selectedType
    })
  }

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country)
    onFilterChange?.({
      region: selectedRegion,
      country,
      type: selectedType
    })
  }

  const handleTypeChange = (type: string) => {
    setSelectedType(type)
    onFilterChange?.({
      region: selectedRegion,
      country: selectedCountry,
      type
    })
  }

  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 shadow-lift border border-accent-gold/20 mb-8">
      <div className="flex items-center mb-6">
        <Filter className="w-5 h-5 text-accent-gold mr-3" />
        <h3 className="text-xl font-bold text-white">Filter Key Moves</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Region Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-accent-platinum">REGION</label>
          <Select value={selectedRegion} onValueChange={handleRegionChange}>
            <SelectTrigger className="bg-background border-accent-gold/30 text-white">
              <SelectValue placeholder="All Regions" />
            </SelectTrigger>
            <SelectContent className="bg-background border-accent-gold/30">
              {regions.map((region) => (
                <SelectItem 
                  key={region} 
                  value={region}
                  className="text-white hover:bg-accent-gold/10 focus:bg-accent-gold/10"
                >
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Country Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-accent-platinum">COUNTRY</label>
          <Select value={selectedCountry} onValueChange={handleCountryChange}>
            <SelectTrigger className="bg-background border-accent-gold/30 text-white">
              <SelectValue placeholder="All Countries" />
            </SelectTrigger>
            <SelectContent className="bg-background border-accent-gold/30 max-h-64">
              {availableCountries.map((country) => (
                <SelectItem 
                  key={country} 
                  value={country}
                  className="text-white hover:bg-accent-gold/10 focus:bg-accent-gold/10"
                >
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Type Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-accent-platinum">STRATEGY TYPE</label>
          <Select value={selectedType} onValueChange={handleTypeChange}>
            <SelectTrigger className="bg-background border-accent-gold/30 text-white">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent className="bg-background border-accent-gold/30 max-h-64">
              {hedgeFundTypes.map((type) => (
                <SelectItem 
                  key={type} 
                  value={type}
                  className="text-white hover:bg-accent-gold/10 focus:bg-accent-gold/10"
                >
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Additional Filter Placeholders */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-accent-platinum">SUB-SECTOR</label>
          <Select>
            <SelectTrigger className="bg-background border-accent-gold/30 text-white">
              <SelectValue placeholder="All Sub-Sectors" />
            </SelectTrigger>
            <SelectContent className="bg-background border-accent-gold/30">
              <SelectItem value="all" className="text-white hover:bg-accent-gold/10 focus:bg-accent-gold/10">
                All Sub-Sectors
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-accent-platinum">TERTIARY SECTOR</label>
          <Select>
            <SelectTrigger className="bg-background border-accent-gold/30 text-white">
              <SelectValue placeholder="All Tertiary" />
            </SelectTrigger>
            <SelectContent className="bg-background border-accent-gold/30">
              <SelectItem value="all" className="text-white hover:bg-accent-gold/10 focus:bg-accent-gold/10">
                All Tertiary
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}