import { LucideIcon } from "lucide-react";

export interface SubNavItem {
  label: string;
  id: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
  children?: SubNavItem[];
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface RoomItem {
  id: number;
  name: string;
  image: string;
  features: string[];
  price: string;
  numericPrice: number;
  capacity: number;
}

export interface TourItem {
  id: number;
  title: string;
  description: string;
  image: string;
  gallery: string[];
  fullDescription: string;
  duration: string;
  priceInfo: string;
  included: string[];
}

export interface TestimonialItem {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}