import { CheckIcon, XIcon } from 'lucide-react';

import { Button } from '@/components/ui/atoms/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/atoms/card';
import { PriceCardProps } from '@/types/shared';

export function PriceCard({
  title,
  description,
  price,
  features,
}: PriceCardProps) {
  return (
    <Card className="bg-card h-full rounded-lg border p-6 shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <ul className="text-muted-foreground mt-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              {feature.included ? (
                <CheckIcon className="h-4 w-4 text-green-500" />
              ) : (
                <XIcon className="h-4 w-4 text-red-500" />
              )}
              {feature.text}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto flex justify-center">
        <Button className="w-full">Start Free Trial</Button>
      </CardFooter>
    </Card>
  );
}
