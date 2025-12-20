export interface PartnerApplication {
  id: string;
  name: string;
  phone: string;
  region: string;
  experience?: string;
  investment: string;
  message?: string;
  status: 'pending' | 'contacted' | 'approved' | 'rejected';
  created_at: string;
}

export interface Consultation {
  id: string;
  name: string;
  phone: string;
  service_type: 'furniture' | 'window';
  address?: string;
  requirements: string;
  status: 'new' | 'contacted' | 'quoted' | 'completed';
  created_at: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: 'furniture' | 'window';
  is_featured: boolean;
  created_at: string;
}

export type ServiceType = 'furniture' | 'window';
