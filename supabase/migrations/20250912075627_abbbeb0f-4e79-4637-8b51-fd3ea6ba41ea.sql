-- Create user profiles table for admin authentication
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  role TEXT NOT NULL DEFAULT 'user',
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
FOR UPDATE USING (auth.uid() = id);

-- Create a function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = user_id AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE SET search_path = public;

-- Create admin policies for all tables
CREATE POLICY "Admins can manage articles" ON public.articles
FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage categories" ON public.categories
FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage deals" ON public.deals
FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage events" ON public.events
FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage geographic regions" ON public.snapshot_geographic_regions
FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage countries" ON public.snapshot_countries
FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage cities" ON public.snapshot_cities
FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage sectors" ON public.snapshot_sectors
FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage sub sectors" ON public.snapshot_sub_sectors
FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage market metrics" ON public.snapshot_market_metrics
FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage market comparisons" ON public.snapshot_market_comparisons
FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage sector intelligence" ON public.snapshot_sector_intelligence
FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage trending people" ON public.snapshot_trending_people
FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage trending projects" ON public.snapshot_trending_projects
FOR ALL USING (public.is_admin(auth.uid()));

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create trigger for profiles updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();