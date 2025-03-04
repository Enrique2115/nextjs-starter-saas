'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ResponsiveCarouselProps } from '@/types/shared';

export function ResponsiveCarousel(props: ResponsiveCarouselProps) {
  const {
    items,
    breakpoint = 640,
    gridCols = { sm: 2, md: 3 },
    className = '',
    itemClassName = '',
    carouselClassName = 'max-w-xs',
    showControls = true,
    controlsClassName = '',
    gap = 4,
    carouselOptions = {
      align: 'center',
      loop: false,
      dragFree: true,
    },
  } = props;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Initial check
    checkIsMobile();

    // Debounced resize handler
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkIsMobile, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [breakpoint]);

  const getGridClasses = () => {
    let smGridClass = 'sm:grid-cols-2'; // Default fallback
    let mdGridClass = 'md:grid-cols-3'; // Default fallback
    let lgGridClass = 'lg:grid-cols-3'; // Default fallback

    // Mapeo explícito de valores comunes para grid-cols
    if (gridCols.sm === 1) smGridClass = 'sm:grid-cols-1';
    if (gridCols.sm === 2) smGridClass = 'sm:grid-cols-2';
    if (gridCols.sm === 3) smGridClass = 'sm:grid-cols-3';
    if (gridCols.sm === 4) smGridClass = 'sm:grid-cols-4';

    if (gridCols.md === 1) mdGridClass = 'md:grid-cols-1';
    if (gridCols.md === 2) mdGridClass = 'md:grid-cols-2';
    if (gridCols.md === 3) mdGridClass = 'md:grid-cols-3';
    if (gridCols.md === 4) mdGridClass = 'md:grid-cols-4';

    if (gridCols.lg === 1) lgGridClass = 'lg:grid-cols-1';
    if (gridCols.lg === 2) lgGridClass = 'lg:grid-cols-2';
    if (gridCols.lg === 3) lgGridClass = 'lg:grid-cols-3';
    if (gridCols.lg === 4) lgGridClass = 'lg:grid-cols-4';
    else lgGridClass = mdGridClass.replace('md:', 'lg:');

    // Manejo seguro para gap
    let gapClass = 'gap-4'; // Default fallback
    if (gap === 1) gapClass = 'gap-1';
    if (gap === 2) gapClass = 'gap-2';
    if (gap === 3) gapClass = 'gap-3';
    if (gap === 4) gapClass = 'gap-4';
    if (gap === 6) gapClass = 'gap-6';
    if (gap === 8) gapClass = 'gap-8';

    return clsx(
      'hidden sm:grid',
      smGridClass,
      mdGridClass,
      lgGridClass,
      gapClass,
      'mx-auto',
      className,
    );
  };

  // Grid view for desktop/tablet
  if (!isMobile) {
    return (
      <div className={getGridClasses()}>
        {items.map((item, index) => (
          <div key={index} className={itemClassName}>
            {item}
          </div>
        ))}
      </div>
    );
  }

  // Carousel view for mobile
  return (
    <div className={clsx('w-full', className)}>
      <Carousel
        className={clsx('relative mx-auto', carouselClassName)}
        opts={carouselOptions}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className={clsx('p-1', itemClassName)}>
              {item}
            </CarouselItem>
          ))}
        </CarouselContent>
        {showControls && (
          <>
            <CarouselPrevious
              className={clsx(
                'absolute -left-4 lg:-left-12',
                controlsClassName,
              )}
            />
            <CarouselNext
              className={clsx(
                'absolute -right-4 lg:-right-12',
                controlsClassName,
              )}
            />
          </>
        )}
      </Carousel>
    </div>
  );
}
