
export type Category = 'All' | 'Promotional' | 'Faceless (Moto)' | 'Car Niche' | 'Cashcow Docs';

export interface PortfolioItem {
  id: string;
  type: 'video' | 'image';
  category: Category;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  // Case Study Details
  client?: string;
  challenge?: string;
  solution?: string;
  results?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
}
