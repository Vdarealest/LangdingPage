import type { SVGProps } from "react";
import type { IconName, SocialIconName } from "@/types";

type IconProps = SVGProps<SVGSVGElement>;

function BeanIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" {...props}>
      <ellipse cx="12" cy="12" rx="6.5" ry="9" transform="rotate(35 12 12)" />
      <path strokeLinecap="round" d="M8.6 16.6c1.8-1.1 2.6-3 2.2-5 -.4-2 .4-3.9 2.2-5" />
    </svg>
  );
}

function LeafIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 4c0 9-5.5 13-11 13a5.5 5.5 0 0 1-.4-11C13 5.6 16 5.4 20 4Z"
      />
      <path strokeLinecap="round" d="M4 20c2-5 5-8 9-10" />
    </svg>
  );
}

function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 2" />
    </svg>
  );
}

function HeartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20s-7-4.4-7-9.2A4 4 0 0 1 12 8a4 4 0 0 1 7 2.8C19 15.6 12 20 12 20Z"
      />
    </svg>
  );
}

function WifiIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" {...props}>
      <path strokeLinecap="round" d="M3.5 9a13 13 0 0 1 17 0M6.5 12.5a8.5 8.5 0 0 1 11 0M9.5 16a4 4 0 0 1 5 0" />
      <circle cx="12" cy="19.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TruckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h10v9H3zM13 10h4l3 3v3h-7z" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </svg>
  );
}

const highlightIconMap: Record<IconName, (props: IconProps) => React.JSX.Element> = {
  bean: BeanIcon,
  leaf: LeafIcon,
  clock: ClockIcon,
  heart: HeartIcon,
  wifi: WifiIcon,
  truck: TruckIcon,
};

export function HighlightIcon({ name, ...props }: { name: IconName } & IconProps) {
  const Icon = highlightIconMap[name];
  return <Icon {...props} />;
}

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.9h-2.34v7.03C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TiktokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 2h-3v13.1a2.6 2.6 0 1 1-2.2-2.57V9.4a5.7 5.7 0 1 0 5.2 5.68V8.9a6.6 6.6 0 0 0 3.8 1.2V7a3.8 3.8 0 0 1-3.8-3.8V2Z" />
    </svg>
  );
}

function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.7a2.7 2.7 0 0 0-1.9-1.9C18 5.3 12 5.3 12 5.3s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.7 28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .4 4.3 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.4-4.3ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}

const socialIconMap: Record<SocialIconName, (props: IconProps) => React.JSX.Element> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  tiktok: TiktokIcon,
  youtube: YoutubeIcon,
};

export function SocialIcon({ name, ...props }: { name: SocialIconName } & IconProps) {
  const Icon = socialIconMap[name];
  return <Icon {...props} />;
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 2 2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.3l-6.1 3.2 1.5-6.8-5.2-4.7 6.9-.7L12 2Z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 4h3.5l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6L15 13l4 1.5V18a2 2 0 0 1-2.2 2A15 15 0 0 1 3 6.2 2 2 0 0 1 5 4Z"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} stroke="currentColor" {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4 8 8 5 8-5" />
    </svg>
  );
}
