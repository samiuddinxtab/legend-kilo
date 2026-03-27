import type { ReactNode } from "react";
import {
  FactoryIcon,
  PaletteIcon,
  TruckIcon,
  ShieldIcon,
  MessageCircleIcon,
  SearchIcon,
  CheckSquareIcon,
  CogIcon,
} from "@/components/icons";

const iconMap: Record<string, ReactNode> = {
  factory: <FactoryIcon />,
  palette: <PaletteIcon />,
  truck: <TruckIcon />,
  shield: <ShieldIcon />,
  message: <MessageCircleIcon />,
  search: <SearchIcon />,
  checkSquare: <CheckSquareIcon />,
  cog: <CogIcon />,
};

export function renderIcon(name: string): ReactNode {
  return iconMap[name] ?? null;
}
