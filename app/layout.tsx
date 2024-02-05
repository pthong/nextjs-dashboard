import '@/app/ui/global.css';
import { inter, babyLonica, comic, aladin, joseFin, lusitana } from '@/app/ui/fonts';
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`${inter.className} antialiased`}>{children}</body> */}
      {/* <body className={`${babyLonica.className} antialiased`}>{children}</body> */}
      {/* <body className={`${comic.className} antialiased`}>{children}</body> */}
      {/* <body className={`${aladin.className} antialiased`}>{children}</body> */}
      <body className={`${joseFin.className} antialiased`}>{children}</body>
      {/* <body className={`${lusitana.className} antialiased`}>{children}</body> */}
    </html>
  );
}
