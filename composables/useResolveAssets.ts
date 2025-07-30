import { ICONS } from "@/constants/icons";
import { COMPONENTS } from '@/constants/components';

export function resolveIcon(key: string) {
  return ICONS[key as keyof typeof ICONS];
}

export function resolveComponent(key: string) {
  return COMPONENTS[key as keyof typeof COMPONENTS];
}