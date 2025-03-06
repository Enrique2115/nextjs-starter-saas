import React from 'react';

import HeaderHome from '@/components/ui/organisms/home/HeaderSection';

export default function HomeTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <HeaderHome />
      <main className="flex-1">{children}</main>
    </div>
  );
}
