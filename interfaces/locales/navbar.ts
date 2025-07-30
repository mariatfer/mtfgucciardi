import type { Icon } from "@/interfaces/common";

export interface NavbarLink {
  id: number;
  text: string;
  route: string;
}

export interface Navbar {
  links: NavbarLink[];
  icons: Icon[];
}
