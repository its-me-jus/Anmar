declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
  }

  export const Sparkles: FC<IconProps>;
  export const ArrowRight: FC<IconProps>;
  export const ChevronsDown: FC<IconProps>;
  export const ChevronLeft: FC<IconProps>;
  export const ChevronRight: FC<IconProps>;
  export const Hexagon: FC<IconProps>;
  export const Mic: FC<IconProps>;
  export const MicOff: FC<IconProps>;
  export const Volume2: FC<IconProps>;
  export const VolumeX: FC<IconProps>;
  export const Award: FC<IconProps>;
  export const Star: FC<IconProps>;
  export const Globe: FC<IconProps>;
  export const Languages: FC<IconProps>;
  export const Home: FC<IconProps>;
  export const AlertTriangle: FC<IconProps>;
  export const CheckCircle: FC<IconProps>;
  export const Loader: FC<IconProps>;
}

export {}; 