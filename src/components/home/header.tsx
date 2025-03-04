import { MenuIcon, MountainIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { ThemeToggle } from './toggle-theme';

export default function HeaderHome() {
  return (
    <header className="bg-background/90 sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto flex h-16 w-full items-center justify-between px-4 md:px-6 lg:px-12">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Acme SaaS</span>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
          <ThemeToggle />
          <Button>Start Trial</Button>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" name="Menu">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="flex flex-col items-start gap-4 p-4">
                <Link
                  href="#features"
                  className="text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  className="text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  Pricing
                </Link>
                <Link
                  href="#contact"
                  className="text-sm font-medium hover:underline"
                  prefetch={false}
                >
                  Contact
                </Link>
                <Button className="w-full">Start Trial</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
