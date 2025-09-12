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
  "North America": ["Canada", "Greenland", "Mexico", "United States"],
  "Europe": ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City (Holy See)"],
  "Asia Pacific": ["Australia", "Brunei", "Cook Islands", "Fiji", "French Polynesia", "Hong Kong", "Japan", "Kiribati", "Macau", "Marshall Islands", "Micronesia", "Nauru", "New Caledonia", "New Zealand", "Palau", "Papua New Guinea", "Samoa", "Singapore", "Solomon Islands", "South Korea", "Taiwan", "Tonga", "Tuvalu", "Vanuatu"],
  "Emerging Asia": ["Afghanistan", "Bangladesh", "Bhutan", "Cambodia", "China", "East Timor (Timor-Leste)", "India", "Indonesia", "Kazakhstan", "Kyrgyzstan", "Laos", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Pakistan", "Philippines", "Sri Lanka", "Tajikistan", "Thailand", "Turkmenistan", "Uzbekistan", "Vietnam"],
  "Latin America": ["Antigua and Barbuda", "Anguilla", "Argentina", "Aruba", "Bahamas", "Barbados", "Belize", "Bermuda", "Bolivia", "Brazil", "Cayman Islands", "Chile", "Colombia", "Costa Rica", "Cuba", "Curaçao", "Dominica", "Dominican Republic", "Ecuador", "El Salvador", "Grenada", "Guatemala", "Guyana", "Haiti", "Honduras", "Jamaica", "Montserrat", "Nicaragua", "Panama", "Paraguay", "Peru", "Puerto Rico", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Sint Maarten", "Suriname", "Trinidad and Tobago", "Turks and Caicos Islands", "Uruguay", "Venezuela"],
  "Middle East & Africa": ["Algeria", "Angola", "Bahrain", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde (Cabo Verde)", "Central African Republic", "Chad", "Comoros", "Congo", "Djibouti", "DR Congo", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Iran", "Iraq", "Israel", "Ivory Coast (Côte d'Ivoire)", "Jordan", "Kenya", "Kuwait", "Lebanon", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Oman", "Palestine", "Qatar", "Rwanda", "São Tomé and Príncipe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Syria", "Tanzania", "Togo", "Tunisia", "UAE (United Arab Emirates)", "Uganda", "Yemen", "Zambia", "Zimbabwe"]
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div>
    </div>
  )
}