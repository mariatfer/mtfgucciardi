import type { Icon } from "@/interfaces/common";

export interface NavbarLink {
  id: number;
  text: string;
  link: string;
}

export interface Navbar {
  links: NavbarLink[];
  icons: Icon[];
}
