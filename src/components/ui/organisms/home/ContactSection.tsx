import Image from 'next/image';

import { ContactForm } from '@/components/ui/molecules/contact/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-muted py-12 md:py-24 lg:py-28">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:flex-row lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold md:text-4xl">Get in Touch</h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Have questions or need help getting started? Our team is here to
            assist you.
          </p>
          {/* Contact Form */}
          <ContactForm />
        </div>
        <Image
          src="/contact-us.webp"
          width="600"
          height="400"
          loading="lazy"
          alt="Contact Us"
          className="mx-auto rounded-lg shadow-lg"
          style={{ aspectRatio: '500/400', objectFit: 'cover' }}
        />
      </div>
    </section>
  );
}
