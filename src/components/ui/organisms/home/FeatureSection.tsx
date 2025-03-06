import {
  CheckIcon,
  CogIcon,
  FlagIcon,
  ProjectorIcon,
  ReceiptIcon,
  WarehouseIcon,
} from 'lucide-react';

import { FeatureCard } from '@/components/ui/molecules/FeatureCard';
import { SectionHeader } from '@/components/ui/molecules/home/SectionHeader';
import { ResponsiveCarousel } from '@/components/ui/organisms/ResponsiveCarousel';

export const featuresData = [
  {
    icon: <ReceiptIcon className="h-full w-full" />,
    title: 'Invoicing',
    description:
      'Generate professional invoices, track payments, and streamline your billing process.',
  },
  {
    icon: <ProjectorIcon className="h-full w-full" />,
    title: 'Project Management',
    description:
      'Manage projects, assign tasks, track time, and collaborate with team members.',
  },
  {
    icon: <CogIcon className="h-full w-full" />,
    title: 'CRM',
    description:
      'Keep track of your leads, customers, and sales pipeline with our integrated CRM tools.',
  },
  {
    icon: <WarehouseIcon className="h-full w-full" />,
    title: 'Inventory Management',
    description:
      'Manage inventory, track stock levels, and streamline your supply chain.',
  },
  {
    icon: <FlagIcon className="h-full w-full" />,
    title: 'Reporting',
    description:
      'Generate comprehensive reports and track financial performance.',
  },
  {
    icon: <CheckIcon className="h-full w-full" />,
    title: 'All-in-one Platform',
    description:
      'Streamline your business operations with our all-in-one platform.',
  },
];

export default function Features() {
  const featureCards = featuresData.map((feature, index) => (
    <FeatureCard key={index} {...feature} />
  ));

  return (
    <section id="features" className="bg-muted py-12 md:py-24 lg:py-28">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:flex-row lg:gap-12">
        <div className="container grid gap-12 px-4 md:px-6">
          <SectionHeader
            eyebrow="Key Features"
            title="Streamline Your Business Operations"
            description="Our SaaS platform offers a comprehensive suite of tools to manage your business efficiently, from invoicing to project management and beyond."
          />

          <ResponsiveCarousel
            items={featureCards}
            breakpoint={640}
            gridCols={{ sm: 2, md: 3, lg: 3 }}
            className="max-w-5xl"
            carouselClassName="max-w-xs"
            gap={6}
            carouselOptions={{
              align: 'center',
              loop: true,
              dragFree: false,
            }}
          />
        </div>
      </div>
    </section>
  );
}
