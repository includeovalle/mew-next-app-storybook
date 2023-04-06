import './styles/globals.scss';

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
export const metadata = {
  title: 'Bienvenido viajero',
  description: 'Un sitio para viajeros',
}
