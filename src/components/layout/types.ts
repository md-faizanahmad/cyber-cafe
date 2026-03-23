// types.ts
export interface ServiceItem {
  name: string;
  href: string;
}

export interface MobileMenuProps {
  items: ServiceItem[];
  pathname: string;
  onClose: () => void;
}

export interface MobileLinkProps {
  href: string;
  label: string;
  active: boolean;
  onClick: () => void;
  isSaffron?: boolean; // Optional prop
}
