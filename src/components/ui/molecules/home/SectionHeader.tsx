import { SectionHeaderProps } from '@/types/shared';

export function SectionHeader({
  eyebrow,
  title,
  description,
  className = '',
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col ${
        align === 'center'
          ? 'items-center text-center'
          : 'items-start text-left'
      } space-y-4 ${className}`}
    >
      {eyebrow && (
        <div className="bg-muted inline-block rounded-lg px-3 py-1 text-sm">
          {eyebrow}
        </div>
      )}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
