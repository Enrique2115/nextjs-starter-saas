'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/atoms/button';
import { Input } from '@/components/ui/atoms/input';
import { Label } from '@/components/ui/atoms/label';
import { Textarea } from '@/components/ui/atoms/textarea';
import { ContactDTO } from '@/modules/contact/types/contact.types';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactDTO>();

  const onSubmit: SubmitHandler<ContactDTO> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* {error && <p className="mb-4 text-sm text-red-500">{error}</p>} */}

      <Label htmlFor="name">Nombre</Label>
      <Input
        {...register('name', { required: 'El nombre es requerido' })}
        id="name"
        type="text"
        className="bg-gray-200 text-gray-800"
        placeholder="Ingresa tu nombre"
      />

      {errors.name?.message && (
        <p className="text-red-500">{errors.name?.message}</p>
      )}

      <Label htmlFor="email">Email</Label>
      <Input
        {...register('email', { required: 'El email es requerido' })}
        id="email"
        type="email"
        className="bg-gray-200 text-gray-800"
        placeholder="Ingresa tu email"
      />

      {errors.email?.message && (
        <p className="text-red-500">{errors.email?.message}</p>
      )}

      <Label htmlFor="message">Mensaje</Label>
      <Textarea
        {...register('message', { required: 'El mensaje es requerido' })}
        id="message"
        className="bg-gray-200 text-gray-800"
        placeholder="Ingresa tu mensaje"
      />

      {errors.message?.message && (
        <p className="text-red-500">{errors.message?.message}</p>
      )}

      <Button
        type="submit"
        className="bg-primary text-primary-foreground hover:bg-primary/80 w-full"
      >
        Enviar
      </Button>
    </form>
  );
};

// export default function Contact() {
//   return (
//     <section id="contact" className="bg-muted py-12 md:py-24 lg:py-28">
//       <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:flex-row lg:gap-12">
//         <div className="space-y-4">
//           <form className="space-y-4">
//             <div>
//               <Label htmlFor="name">Name</Label>
//               <Input id="name" type="text" placeholder="Enter your name" />
//             </div>
//             <div>
//               <Label htmlFor="email">Email</Label>
//               <Input id="email" type="email" placeholder="Enter your email" />
//             </div>
//             <div>
//               <Label htmlFor="message">Message</Label>
//               <Textarea id="message" placeholder="Enter your message" />
//             </div>
//             <Button type="submit" className="w-full">
//               Submit
//             </Button>
//           </form>
//         </div>
//         <Image
//           src="/contact-us.webp"
//           width="600"
//           height="400"
//           alt="Contact Us"
//           className="mx-auto rounded-lg shadow-lg"
//           style={{ aspectRatio: '500/400', objectFit: 'cover' }}
//         />
//       </div>
//     </section>
//   );
// }
