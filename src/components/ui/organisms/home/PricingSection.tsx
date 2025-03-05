import { SectionHeader } from '@/components/ui/molecules/home/SectionHeader';
import { PriceCard } from '@/components/ui/molecules/PriceCard';
import { ResponsiveCarousel } from '@/components/ui/organisms/ResponsiveCarousel';

export const pricingPlans = [
  {
    title: 'Starter',
    description: 'Perfect for small businesses',
    price: 19,
    features: [
      { included: true, text: 'Invoicing' },
      { included: true, text: 'Project Management' },
      { included: true, text: 'CRM' },
      { included: false, text: 'Reporting' },
      { included: false, text: 'Inventory' },
      { included: false, text: 'Payments' },
    ],
  },
  {
    title: 'Pro',
    description: 'For growing businesses',
    price: 29,
    features: [
      { included: true, text: 'Invoicing' },
      { included: true, text: 'Project Management' },
      { included: true, text: 'CRM' },
      { included: true, text: 'Reporting' },
      { included: false, text: 'Inventory' },
      { included: false, text: 'Payments' },
    ],
  },
  {
    title: 'Business',
    description: 'For growing businesses',
    price: 29,
    features: [
      { included: true, text: 'Invoicing' },
      { included: true, text: 'Project Management' },
      { included: true, text: 'CRM' },
      { included: true, text: 'Reporting' },
      { included: true, text: 'Inventory' },
      { included: true, text: 'Payments' },
    ],
  },
];

export default function Pricing() {
  const priceCards = pricingPlans.map((plan, index) => (
    <PriceCard key={index} {...plan} />
  ));

  return (
    <section
      id="pricing"
      className="from-background to-muted-foreground bg-gradient-to-b py-12 md:py-24 lg:py-28"
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:flex-row lg:gap-12">
        <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
          <SectionHeader
            title="Flexible Pricing to Fit Your Needs"
            description="Choose from our range of pricing plans to find the perfect fit for your business."
          />

          <ResponsiveCarousel
            items={priceCards}
            breakpoint={640}
            gridCols={{ sm: 2, md: 3, lg: 3 }}
            className="max-w-5xl"
            // itemClassName="bg-amber-300"
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
