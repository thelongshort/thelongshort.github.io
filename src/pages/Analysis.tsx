import React, { useState, useMemo } from 'react';
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ArrowLeft, Calendar, Clock, User, Search, TrendingUp, Target, Briefcase, Users, Newspaper, FileText } from 'lucide-react';

interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  content: string;
  badgeColor: string;
  image: string;
  heroImage?: string;
}

const articles: Article[] = [
  {
    id: '1',
    category: 'Transaction',
    title: 'How South Africa\'s 2015-2017 Hedge Fund Reforms Shaped Johannesburg\'s Fund Ecosystem',
    excerpt: 'Examining the transformative impact of regulatory change on the city\'s alternative investment landscape',
    author: 'Editorial Team',
    publishedAt: 'Jun 15, 2024',
    readTime: '4 min read',
    badgeColor: 'bg-blue-500/20 text-blue-300',
    image: 'https://www.africacapitaldigest.com/wordpress/wp-content/uploads/2016/09/JSE.jpg',
    heroImage: 'https://www.africacapitaldigest.com/wordpress/wp-content/uploads/2016/09/JSE.jpg',
    content: `
      <h2>A Turning Point for Alternative Investments</h2>
      <p>From 2015 to 2017, South Africa introduced comprehensive reforms for its hedge fund industry, significantly altering the financial landscape of Johannesburg, the country's financial hub. The reforms, led by the Financial Services Board (now the FSCA), classified hedge funds as collective investment schemes, thereby subjecting them to stricter oversight and integrating them within the regulatory architecture previously reserved for mutual funds. The result was a pivotal moment for the local fund industry, impacting everything from compliance to investor perceptions.</p>

      <h3>Key Provisions and Their Impact</h3>
      <p>The reforms introduced diversified fund categories—classified into retail and qualified investor hedge funds—each with distinct risk and disclosure requirements. These rules enhanced transparency, fostered greater investor protection, and improved overall market integrity. Local hedge fund managers in Johannesburg had to adapt by formalizing operational best practices, strengthening risk management systems, and building compliance capabilities, resulting in heightened professionalism across the sector.</p>

      <h3>Growth, Consolidation, and Innovation</h3>
      <p>Regulatory certainty sparked renewed interest from both domestic and international investors. Institutional allocations to hedge funds in Johannesburg grew, and traditional asset managers began exploring alternative investment products. At the same time, tighter controls led to consolidation, with smaller, informal players exiting and established firms gaining market share. The refined ecosystem spurred innovation, with new hedging strategies and fund structures emerging to satisfy more sophisticated investor needs.</p>

      <h3>Johannesburg\'s New Hedge Fund Landscape</h3>
      <p>Today, Johannesburg boasts a more robust, transparent, and globally competitive hedge fund market. The legacy of the 2015-2017 reforms is visible in the city's prominence as a regional hub for alternative investments, its ability to attract world-class fund managers, and its alignment with international standards. The transformation underlines the power of regulatory direction to reshape markets—not merely through compliance, but by fostering confidence, growth, and resilience.</p>
    `
  },
  {
    id: '2',
    category: 'Finance',
    title: 'Why the Old Mutual/27four Merger Set the Tone for Pan-African Hedge Platforms',
    excerpt: 'A look at the transformational impact of the landmark transaction on Africa\'s alternative asset landscape',
    author: 'Editorial Team',
    publishedAt: 'Jun 22, 2024',
    readTime: '4 min read',
    badgeColor: 'bg-purple-500/20 text-purple-300',
    image: 'https://news-compliance.prembly.com/wp-content/uploads/2024/10/COMESA-Merger-1024x576.jpg',
    heroImage: 'https://news-compliance.prembly.com/wp-content/uploads/2024/10/COMESA-Merger-1024x576.jpg',
    content: `
      <h2>Introduction: A Landmark Merger</h2>
      <p>The recent merger between Old Mutual Alternative Investments and 27four Investment Managers has set a new precedent for the continent's alternative investment industry. By combining resources, expertise, and reach, the merger is not just rewriting the South African hedge fund story—it's crafting a template for pan-African hedge platforms.</p>

      <h3>The Deal and Its Significance</h3>
      <p>This landmark transaction brings together two powerhouse firms, creating one of Africa's largest hedge fund management platforms. The move gives the consolidated entity a critical mass, deeper pools of expertise, and economies of scale, which could unlock greater diversification and product innovation. For clients, this means enhanced access to African hedge strategies and more robust risk-adjusted return opportunities.</p>

      <h3>Catalyst for Pan-African Growth</h3>
      <p>The Old Mutual/27four merger is more than a local story. By prioritising scale and transparency, the deal demonstrates to other fund managers and investors that Africa is ready for more integrated, border-crossing vehicles. It invites global capital and regional players to back local managers, invest across borders, and build resilient platforms that can withstand the continent's market complexities.</p>

      <h3>Setting the Standard for Governance and Innovation</h3>
      <p>Hedge fund investing in Africa has often been hampered by regulatory, liquidity, and capacity constraints. The newly created platform's robust governance, tech-driven transparency, and risk controls set a higher bar for peers. This is likely to drive market best practices and encourage adoption of new technologies in investment processes.</p>

      <h3>Looking Ahead: Implications for Investors</h3>
      <p>For institutional and high-net-worth investors, the newly merged entity offers improved product variety and pan-African reach. It sets the tone for further consolidation, innovation, and shared infrastructure across the continent's asset management sector—a crucial step for deepening Africa's capital markets.</p>
    `
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Finance':
      return <TrendingUp className="h-4 w-4" />;
    case 'Transaction':
      return <Target className="h-4 w-4" />;
    case 'Business':
      return <Briefcase className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
};

const Analysis = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = ['All', ...Array.from(new Set(articles.map(article => article.category)))];

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
            Market Analysis & Intelligence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep insights into hedge fund strategies, market movements, and institutional intelligence from across Africa's financial ecosystem
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="flex items-center gap-2"
              >
                {getCategoryIcon(category)}
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card
              key={article.id}
              className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-border/50 backdrop-blur-sm bg-card/80"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={article.badgeColor}>
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-2 text-foreground">
                  {article.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-muted-foreground">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.publishedAt}
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Analysis;