export type VideoConfig = {
  src: string; // youtube or vimeo video ID or path to video file
  type?: string; // Optional: only required for local files (e.g., "video/mp4")
  provider?: "youtube" | "vimeo" | "html5"; // Accepted providers (default is "youtube")
  poster?: string; // Optional: URL or image path for video thumbnail
  autoplay?: boolean; // Optional: true to autoplay, false to start manually (default is false)
  id?: string; // required if same video is used on multiple time on same page
};

// For Astro Font
type GlobalValues = "inherit" | "initial" | "revert" | "revert-layer" | "unset";
interface Source {
  path?: string;
  preload?: boolean;
  css?: Record<string, string>;
  style:
    | "normal"
    | "italic"
    | "oblique"
    | `oblique ${number}deg`
    | GlobalValues
    | (string & {});
  weight?:
    | "normal"
    | "bold"
    | "lighter"
    | "bolder"
    | GlobalValues
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | (string & {})
    | (number & {});
}
interface FontConfig {
  name: string;
  src: Source[];
  fetch?: boolean;
  verbose?: boolean;
  selector?: string;
  preload?: boolean;
  cacheDir?: string;
  basePath?: string;
  fallbackName?: string;
  googleFontsURL?: string;
  cssVariable?: string | boolean;
  fallback: "serif" | "sans-serif" | "monospace";
  display: "auto" | "block" | "swap" | "fallback" | "optional" | (string & {});
}

export type Button = {
  enable: boolean;
  label: string;
  url: string;
  rel?: string;
  target?: string;
};

export type TocHeading = {
  depth: number;
  slug: string;
  text: string;
  subheadings: Heading[];
};

export type Section = {
  enable?: boolean;
  title?: string;
  excerpt?: string;
  date?: Date | string;
  author?: string;
  subtitle?: string;
  categories?: string[];
  description?: string;
  button?: Button;
  image?: string;
  limit?: false | number;
};

export type SocialLink = {
  enable: boolean;
  label: string;
  icon: string;
  url: string;
};

export interface Badge {
  enable: boolean;
  label: string;
  color: "primary" | "success" | "danger" | "warning" | string;
  type: "dot" | "text";
}

export interface ChildNavigationLink {
  enable: boolean;
  name: string;
  url?: string;
  rel?: string;
  target?: string;
  icon?: string;
  description?: string;
  hasChildren?: boolean;
  badge?: Badge;
  children?: ChildNavigationLink[];
}

export interface NavigationCta {
  enable?: boolean;
  image?: string;
  title?: string;
  description?: string;
  button?: Button & Record<string, any>;
}

export interface NavigationLink extends ChildNavigationLink {
  enable: boolean;
  hasMegaMenu?: boolean;
  cta?: NavigationCta;
  testimonial?: Testimonial;
  services?: Service;
  menus?: NavigationLink[];
}

export type HeaderLayout = "one" | "two" | "three";
export type TopbarContent = "location" | "office-hours";
export interface HeaderLayoutConfig {
  topbarLayout: "primary" | "dark" | "navy";
  topbarLeftContent: TopbarContent[];
  topbarSize?: "default" | "compact";
  hasDarkAppearance: boolean;
  hasFramedWrapper?: boolean;
  isTransparent?: boolean;
  isMenuRight: boolean;
  navbarClass?: string;
  navShellClass?: string;
  showDesktopToggler: boolean;
  showNavigationButton: boolean;
  showTopbarDots?: boolean;
  showLanguageSwitcher?: boolean;
}
