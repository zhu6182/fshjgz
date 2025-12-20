-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Partner Applications Table
CREATE TABLE IF NOT EXISTS partner_applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    region VARCHAR(100) NOT NULL,
    experience TEXT,
    investment VARCHAR(50) NOT NULL,
    message TEXT,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'approved', 'rejected')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_partner_applications_status ON partner_applications(status);
CREATE INDEX IF NOT EXISTS idx_partner_applications_created_at ON partner_applications(created_at DESC);

-- Consultations Table
CREATE TABLE IF NOT EXISTS consultations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    service_type VARCHAR(50) NOT NULL CHECK (service_type IN ('furniture', 'window')),
    address VARCHAR(200),
    requirements TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'completed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_consultations_status ON consultations(status);
CREATE INDEX IF NOT EXISTS idx_consultations_service_type ON consultations(service_type);

-- Case Studies Table
CREATE TABLE IF NOT EXISTS case_studies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(200) NOT NULL,
    description TEXT,
    images JSONB NOT NULL,
    category VARCHAR(50) NOT NULL CHECK (category IN ('furniture', 'window')),
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_case_studies_category ON case_studies(category);
CREATE INDEX IF NOT EXISTS idx_case_studies_featured ON case_studies(is_featured);

-- RLS Policies
ALTER TABLE partner_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

-- Allow anon to insert (for forms)
CREATE POLICY "Allow anon insert partner_applications" ON partner_applications FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anon insert consultations" ON consultations FOR INSERT TO anon WITH CHECK (true);

-- Allow anon to select case studies
CREATE POLICY "Allow anon select case_studies" ON case_studies FOR SELECT TO anon USING (true);

-- Allow authenticated (admin) to do everything
CREATE POLICY "Allow authenticated all partner_applications" ON partner_applications FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow authenticated all consultations" ON consultations FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow authenticated all case_studies" ON case_studies FOR ALL TO authenticated USING (true);
