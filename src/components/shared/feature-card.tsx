import type { FeatureCardProps } from '@/types/shared';

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-card rounded-lg border p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="bg-primary text-primary-foreground h-8 w-8 rounded-full p-2">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
