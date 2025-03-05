import Image from 'next/image';

import { Button } from '@/components/ui/atoms/button';

export default function HeroSection() {
  return (
    <section className="from-background to-muted bg-gradient-to-b py-12 md:pb-24 lg:pb-32">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:flex-row lg:gap-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Streamline Your Business with Our SaaS Platform
          </h1>
          <p className="text-muted-foreground max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Unlock the power of our all-in-one SaaS platform to manage your
            business effortlessly. From invoicing to project management,
            we&apos;ve got you covered.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/80 w-full sm:w-auto">
            Start Trial
          </Button>
        </div>
        <Image
          src="/hero.webp"
          width="550"
          height="550"
          loading="lazy"
          alt="Hero"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
        />
      </div>
    </section>
  );
}
