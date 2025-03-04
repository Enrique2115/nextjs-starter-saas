import React, { ReactNode } from 'react';

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PriceCardProps {
  title: string;
  description: string;
  price: number;
  features: {
    included: boolean;
    text: string;
  }[];
}

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export interface ResponsiveCarouselProps {
  items: ReactNode[];
  breakpoint?: number;
  gridCols?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
  className?: string;
  itemClassName?: string;
  carouselClassName?: string;
  showControls?: boolean;
  controlsClassName?: string;
  gap?: number;
  carouselOptions?: {
    align?: 'start' | 'center' | 'end';
    loop?: boolean;
    dragFree?: boolean;
  };
}
