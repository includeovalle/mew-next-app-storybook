import './styles/globals.scss';
import Image from 'next/image';
import { Roboto_Slab } from 'next/font/google'
import BgImage from '../public/assets/horse-neb.jpg';

const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: '400',
  display: 'swap',
});
//const stick_no_bills = Stick_No_Bills({
//  subsets: ['latin'],
//  variable: '--font-stick-no-bills',
//  weight: '400',
//  display: 'swap',
//});
export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={roboto_slab.className} >
        <Image src={BgImage} alt="Horse Nebula" fill
          sizes="(max-width: 576px) 100vw, 576px"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority={true}
          quality={100}
        />
        {children}
      </body>
    </html>
  );
}
export const metadata = {
  title: 'MIW: Bienvenido viajero',
  description: 'Un sitio para viajeros',
}
