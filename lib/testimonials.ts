export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  companyLogo?: string;
  relationship: string;
  date: string;
  text: string;
  linkedinUrl?: string;
  image?: string;
  skills?: string[];
  featured?: boolean;
}

export const testimonials: Testimonial[] = [];
