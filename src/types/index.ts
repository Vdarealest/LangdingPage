export interface NavLink {
  label: string;
  href: string;
}

export type IconName =
  | "bean"
  | "leaf"
  | "clock"
  | "heart"
  | "wifi"
  | "truck";

export interface Highlight {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export type MenuCategoryId = "ca-phe" | "do-uong" | "banh";

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: MenuCategoryId;
  popular?: boolean;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface OpeningHour {
  days: string;
  time: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export type SocialIconName = "facebook" | "instagram" | "tiktok" | "youtube";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconName;
}
