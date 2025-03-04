import Contact from '@/components/home/contact';
import Features from '@/components/home/features';
import HeaderHome from '@/components/home/header';
import Main from '@/components/home/main';
import Pricing from '@/components/home/pricing';

export default function Home() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <HeaderHome />
      <main className="flex-1">
        <Main />
        <Features />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
}
