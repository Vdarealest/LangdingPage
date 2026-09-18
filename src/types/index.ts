export type Locale = "en" | "vi";

export interface NavLink { label: string; href: string }

export type IconName = "bean" | "leaf" | "clock" | "heart" | "wifi" | "truck";

export interface Highlight { id: string; title: string; description: string; icon: IconName }

export type MenuCategoryId = "ca-phe" | "do-uong" | "banh";
export interface MenuCategory { id: MenuCategoryId; label: string }

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  imageAlt: string;
  price: number;
  imageUrl: string;
  category: MenuCategoryId;
  popular?: boolean;
}

export interface Stat { id: string; label: string; value: string }

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
}

export interface ImageAsset { src: string; alt: string }
export interface GalleryImage extends ImageAsset { id: string }
export interface OpeningHour { days: string; time: string }
export interface ContactInfo { address: string; phone: string; email: string }
export interface FooterLinkGroup { title: string; links: NavLink[] }
export type SocialIconName = "facebook" | "instagram" | "tiktok" | "youtube";
export interface SocialLink { label: string; href: string; icon: SocialIconName }

export interface SiteCopy {
  locale: Locale;
  metadata: { title: string; description: string };
  brand: { name: string; tagline: string };
  navbar: {
    navigationLabel: string;
    reserveLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    languageSwitcherLabel: string;
    switchToEnglishLabel: string;
    switchToVietnameseLabel: string;
  };
  navLinks: NavLink[];
  hero: {
    badge: string;
    titleLines: string[];
    description: string;
    menuCta: string;
    visitCta: string;
    openingTitle: string;
    openingDescription: string;
    image: ImageAsset;
  };
  marqueeItems: string[];
  highlights: { eyebrow: string; title: string; items: Highlight[] };
  story: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    quote: string;
    author: string;
    image: ImageAsset;
  };
  menu: {
    eyebrow: string;
    title: string;
    description: string;
    allLabel: string;
    popularLabel: string;
    categories: MenuCategory[];
    items: MenuItem[];
  };
  stats: Stat[];
  gallery: { eyebrow: string; title: string; images: GalleryImage[] };
  testimonials: { eyebrow: string; title: string; items: Testimonial[] };
  visit: {
    eyebrow: string;
    title: string;
    description: string;
    contact: ContactInfo;
    callToAction: string;
    hoursTitle: string;
    hours: OpeningHour[];
    hoursNote: string;
  };
  footer: {
    description: string;
    groups: FooterLinkGroup[];
    copyright: string;
    socialLinks: SocialLink[];
  };
}
