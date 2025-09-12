-- Create all tables based on the provided schema

-- Articles table
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  content TEXT,
  category TEXT NOT NULL,
  image_url TEXT,
  read_time INTEGER,
  metric_value TEXT,
  slug TEXT,
  author_id UUID,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  featured BOOLEAN DEFAULT false,
  featured_order INTEGER,
  excerpt TEXT,
  author_name TEXT,
  view_count INTEGER DEFAULT 0,
  published_date DATE
);

-- Categories table
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  description TEXT,
  color TEXT DEFAULT 'primary',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Deals table
CREATE TABLE public.deals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  deal_id TEXT NOT NULL,
  deal_name TEXT NOT NULL,
  deal_status TEXT NOT NULL DEFAULT 'Draft',
  transaction_type TEXT NOT NULL,
  announcement_date DATE,
  closing_date DATE,
  deal_value BIGINT,
  deal_value_formatted TEXT,
  deal_size_category TEXT,
  price_per_sf NUMERIC,
  cap_rate NUMERIC,
  investment_strategy TEXT,
  property_name TEXT,
  property_type TEXT,
  property_subtype TEXT,
  square_footage INTEGER,
  year_built INTEGER,
  occupancy_rate NUMERIC,
  image_url TEXT,
  full_address TEXT,
  street_address TEXT,
  city TEXT,
  state_province TEXT,
  country TEXT,
  region TEXT,
  postal_code TEXT,
  latitude NUMERIC,
  longitude NUMERIC,
  buyer TEXT,
  buyer_type TEXT,
  seller TEXT,
  seller_type TEXT,
  broker TEXT,
  lender TEXT,
  deal_highlights JSONB DEFAULT '[]',
  market_intelligence TEXT,
  strategic_significance TEXT,
  competitive_dynamics TEXT,
  source TEXT,
  confidence_score NUMERIC,
  data_quality_score NUMERIC,
  featured_deal BOOLEAN DEFAULT false,
  recent_deal BOOLEAN DEFAULT false,
  pipeline_deal BOOLEAN DEFAULT false,
  trending_deal BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT now(),
  description TEXT
);

-- Events table
CREATE TABLE public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  event_type TEXT NOT NULL,
  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE,
  location TEXT,
  venue TEXT,
  image_url TEXT,
  registration_url TEXT,
  price NUMERIC,
  capacity INTEGER,
  organizer TEXT,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Snapshot geographic regions
CREATE TABLE public.snapshot_geographic_regions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Snapshot countries
CREATE TABLE public.snapshot_countries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  region_id UUID NOT NULL REFERENCES public.snapshot_geographic_regions(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Snapshot cities
CREATE TABLE public.snapshot_cities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  country_id UUID NOT NULL REFERENCES public.snapshot_countries(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Snapshot sectors
CREATE TABLE public.snapshot_sectors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Snapshot sub sectors
CREATE TABLE public.snapshot_sub_sectors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  sector_id UUID NOT NULL REFERENCES public.snapshot_sectors(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Snapshot market metrics
CREATE TABLE public.snapshot_market_metrics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  metric_name TEXT NOT NULL,
  metric_category TEXT NOT NULL,
  metric_family TEXT NOT NULL,
  current_value TEXT NOT NULL,
  change_percentage NUMERIC,
  change_direction TEXT,
  sparkline_data JSONB,
  region_id UUID REFERENCES public.snapshot_geographic_regions(id),
  country_id UUID REFERENCES public.snapshot_countries(id),
  city_id UUID REFERENCES public.snapshot_cities(id),
  sector_id UUID REFERENCES public.snapshot_sectors(id),
  sub_sector_id UUID REFERENCES public.snapshot_sub_sectors(id),
  data_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Snapshot market comparisons
CREATE TABLE public.snapshot_market_comparisons (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  comparison_type TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  comparison_data JSONB NOT NULL,
  region_id UUID REFERENCES public.snapshot_geographic_regions(id),
  country_id UUID REFERENCES public.snapshot_countries(id),
  sector_id UUID REFERENCES public.snapshot_sectors(id),
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Snapshot sector intelligence
CREATE TABLE public.snapshot_sector_intelligence (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  metrics JSONB,
  sector_id UUID NOT NULL REFERENCES public.snapshot_sectors(id),
  sub_sector_id UUID REFERENCES public.snapshot_sub_sectors(id),
  region_id UUID REFERENCES public.snapshot_geographic_regions(id),
  country_id UUID REFERENCES public.snapshot_countries(id),
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Snapshot trending people
CREATE TABLE public.snapshot_trending_people (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  position TEXT NOT NULL,
  image_url TEXT,
  change_percentage NUMERIC,
  description TEXT,
  sector_id UUID REFERENCES public.snapshot_sectors(id),
  region_id UUID REFERENCES public.snapshot_geographic_regions(id),
  country_id UUID REFERENCES public.snapshot_countries(id),
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Snapshot trending projects
CREATE TABLE public.snapshot_trending_projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  project_value TEXT NOT NULL,
  project_status TEXT NOT NULL,
  image_url TEXT,
  change_percentage NUMERIC,
  description TEXT,
  sector_id UUID REFERENCES public.snapshot_sectors(id),
  sub_sector_id UUID REFERENCES public.snapshot_sub_sectors(id),
  region_id UUID REFERENCES public.snapshot_geographic_regions(id),
  country_id UUID REFERENCES public.snapshot_countries(id),
  city_id UUID REFERENCES public.snapshot_cities(id),
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_geographic_regions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_countries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_sectors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_sub_sectors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_market_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_market_comparisons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_sector_intelligence ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_trending_people ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.snapshot_trending_projects ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public read access (since this is a content platform)
CREATE POLICY "Public can read published articles" ON public.articles
FOR SELECT USING (published = true);

CREATE POLICY "Public can read categories" ON public.categories
FOR SELECT USING (true);

CREATE POLICY "Public can read published deals" ON public.deals
FOR SELECT USING (published = true);

CREATE POLICY "Public can read published events" ON public.events
FOR SELECT USING (published = true);

CREATE POLICY "Public can read geographic regions" ON public.snapshot_geographic_regions
FOR SELECT USING (true);

CREATE POLICY "Public can read countries" ON public.snapshot_countries
FOR SELECT USING (true);

CREATE POLICY "Public can read cities" ON public.snapshot_cities
FOR SELECT USING (true);

CREATE POLICY "Public can read sectors" ON public.snapshot_sectors
FOR SELECT USING (true);

CREATE POLICY "Public can read sub sectors" ON public.snapshot_sub_sectors
FOR SELECT USING (true);

CREATE POLICY "Public can read market metrics" ON public.snapshot_market_metrics
FOR SELECT USING (true);

CREATE POLICY "Public can read published market comparisons" ON public.snapshot_market_comparisons
FOR SELECT USING (published = true);

CREATE POLICY "Public can read published sector intelligence" ON public.snapshot_sector_intelligence
FOR SELECT USING (published = true);

CREATE POLICY "Public can read published trending people" ON public.snapshot_trending_people
FOR SELECT USING (published = true);

CREATE POLICY "Public can read published trending projects" ON public.snapshot_trending_projects
FOR SELECT USING (published = true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for updated_at
CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON public.articles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON public.categories
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_deals_updated_at
  BEFORE UPDATE ON public.deals
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON public.events
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_geographic_regions_updated_at
  BEFORE UPDATE ON public.snapshot_geographic_regions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_countries_updated_at
  BEFORE UPDATE ON public.snapshot_countries
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_cities_updated_at
  BEFORE UPDATE ON public.snapshot_cities
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_sectors_updated_at
  BEFORE UPDATE ON public.snapshot_sectors
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_sub_sectors_updated_at
  BEFORE UPDATE ON public.snapshot_sub_sectors
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_market_metrics_updated_at
  BEFORE UPDATE ON public.snapshot_market_metrics
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_market_comparisons_updated_at
  BEFORE UPDATE ON public.snapshot_market_comparisons
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_sector_intelligence_updated_at
  BEFORE UPDATE ON public.snapshot_sector_intelligence
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_trending_people_updated_at
  BEFORE UPDATE ON public.snapshot_trending_people
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_snapshot_trending_projects_updated_at
  BEFORE UPDATE ON public.snapshot_trending_projects
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_articles_published ON public.articles(published);
CREATE INDEX idx_articles_featured ON public.articles(featured);
CREATE INDEX idx_articles_category ON public.articles(category);
CREATE INDEX idx_deals_published ON public.deals(published);
CREATE INDEX idx_deals_region ON public.deals(region);
CREATE INDEX idx_deals_country ON public.deals(country);
CREATE INDEX idx_events_published ON public.events(published);
CREATE INDEX idx_events_start_date ON public.events(start_date);