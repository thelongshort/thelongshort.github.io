import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Navigation } from "@/components/Navigation"
import { useAuth } from "@/hooks/useAuth"
import { supabase } from "@/integrations/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { PlusCircle, Edit, Trash2, Upload, Shield, Users, FileText, Calendar } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Article {
  id: string
  title: string
  category: string
  published: boolean
  created_at: string
  author_name: string
}

interface Deal {
  id: string
  deal_name: string
  deal_value_formatted: string
  deal_status: string
  region: string
  city: string
}

interface Event {
  id: string
  title: string
  event_type: string
  start_date: string
  published: boolean
  location: string
}

export default function AdminNew() {
  const { user, isAdmin, loading } = useAuth()
  const [activeTab, setActiveTab] = useState("overview")
  const [articles, setArticles] = useState<Article[]>([])
  const [deals, setDeals] = useState<Deal[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [stats, setStats] = useState({
    totalArticles: 0,
    totalDeals: 0,
    totalEvents: 0,
    publishedArticles: 0
  })
  const navigate = useNavigate()
  const { toast } = useToast()

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth")
      return
    }
    
    if (!loading && user && !isAdmin) {
      toast({
        title: "Access Denied",
        description: "You need admin privileges to access this page",
        variant: "destructive"
      })
      navigate("/")
      return
    }

    if (isAdmin) {
      fetchData()
    }
  }, [user, isAdmin, loading, navigate])

  const fetchData = async () => {
    try {
      // Fetch articles
      const { data: articlesData } = await supabase
        .from('articles')
        .select('id, title, category, published, created_at, author_name')
        .order('created_at', { ascending: false })
        .limit(10)

      // Fetch deals
      const { data: dealsData } = await supabase
        .from('deals')
        .select('id, deal_name, deal_value_formatted, deal_status, region, city')
        .order('created_at', { ascending: false })
        .limit(10)

      // Fetch events
      const { data: eventsData } = await supabase
        .from('events')
        .select('id, title, event_type, start_date, published, location')
        .order('created_at', { ascending: false })
        .limit(10)

      // Fetch stats
      const [articleCount, dealCount, eventCount, publishedArticleCount] = await Promise.all([
        supabase.from('articles').select('*', { count: 'exact', head: true }),
        supabase.from('deals').select('*', { count: 'exact', head: true }),
        supabase.from('events').select('*', { count: 'exact', head: true }),
        supabase.from('articles').select('*', { count: 'exact', head: true }).eq('published', true)
      ])

      setArticles(articlesData || [])
      setDeals(dealsData || [])
      setEvents(eventsData || [])
      setStats({
        totalArticles: articleCount.count || 0,
        totalDeals: dealCount.count || 0,
        totalEvents: eventCount.count || 0,
        publishedArticles: publishedArticleCount.count || 0
      })
    } catch (error) {
      console.error('Error fetching data:', error)
      toast({
        title: "Error",
        description: "Failed to fetch admin data",
        variant: "destructive"
      })
    }
  }

  if (loading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>
  }

  if (!user || !isAdmin) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-accent-gold" />
            <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
          </div>
          <p className="text-muted-foreground">Manage your platform content and data</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="deals">Deals</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="snapshot">Snapshot</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalArticles}</div>
                  <p className="text-xs text-muted-foreground">{stats.publishedArticles} published</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Deals</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalDeals}</div>
                  <p className="text-xs text-muted-foreground">In database</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalEvents}</div>
                  <p className="text-xs text-muted-foreground">Scheduled</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Admin Status</CardTitle>
                  <Shield className="h-4 w-4 text-accent-gold" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent-gold">Active</div>
                  <p className="text-xs text-muted-foreground">Full access</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="articles" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Articles Management</h2>
              <Button>
                <PlusCircle className="w-4 h-4 mr-2" />
                New Article
              </Button>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Articles</CardTitle>
                <CardDescription>Manage your published and draft articles</CardDescription>
              </CardHeader>
              <CardContent>
                {articles.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {articles.map((article) => (
                        <TableRow key={article.id}>
                          <TableCell className="font-medium">{article.title}</TableCell>
                          <TableCell>{article.category}</TableCell>
                          <TableCell>{article.author_name || 'Unknown'}</TableCell>
                          <TableCell>
                            <Badge variant={article.published ? "default" : "secondary"}>
                              {article.published ? "Published" : "Draft"}
                            </Badge>
                          </TableCell>
                          <TableCell>{new Date(article.created_at).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <p className="text-muted-foreground">No articles found. Create your first article!</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deals" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Deals Management</h2>
              <Button>
                <PlusCircle className="w-4 h-4 mr-2" />
                New Deal
              </Button>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Deals</CardTitle>
                <CardDescription>Manage deal data and pipeline</CardDescription>
              </CardHeader>
              <CardContent>
                {deals.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Deal Name</TableHead>
                        <TableHead>Value</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {deals.map((deal) => (
                        <TableRow key={deal.id}>
                          <TableCell className="font-medium">{deal.deal_name}</TableCell>
                          <TableCell>{deal.deal_value_formatted || 'N/A'}</TableCell>
                          <TableCell>
                            <Badge variant={deal.deal_status === "Closed" ? "default" : "secondary"}>
                              {deal.deal_status}
                            </Badge>
                          </TableCell>
                          <TableCell>{deal.city}, {deal.region}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <p className="text-muted-foreground">No deals found. Import your first deals!</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Events Management</h2>
              <Button>
                <PlusCircle className="w-4 h-4 mr-2" />
                New Event
              </Button>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Events</CardTitle>
                <CardDescription>Manage upcoming events and conferences</CardDescription>
              </CardHeader>
              <CardContent>
                {events.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {events.map((event) => (
                        <TableRow key={event.id}>
                          <TableCell className="font-medium">{event.title}</TableCell>
                          <TableCell>{event.event_type}</TableCell>
                          <TableCell>{new Date(event.start_date).toLocaleDateString()}</TableCell>
                          <TableCell>{event.location || 'TBD'}</TableCell>
                          <TableCell>
                            <Badge variant={event.published ? "default" : "secondary"}>
                              {event.published ? "Published" : "Draft"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <p className="text-muted-foreground">No events found. Create your first event!</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="snapshot" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Snapshot Data</h2>
              <Button>
                <Upload className="w-4 h-4 mr-2" />
                Import Data
              </Button>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Market Data Management</CardTitle>
                <CardDescription>Manage snapshot and market intelligence data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Snapshot data management interface - coming soon!</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Settings</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>Configure your platform preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="auto-publish">Auto-publish approved content</Label>
                    <p className="text-sm text-muted-foreground">Automatically publish content when approved</p>
                  </div>
                  <Switch id="auto-publish" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications">Email notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive email updates for new content</p>
                  </div>
                  <Switch id="email-notifications" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}