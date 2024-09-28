import '@/styles/globals.css';
import type { Metadata } from 'next';
import ThemeProvider from './(home)/providers';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata: Metadata = {
  title: 'Colors',
  description: 'Color picker app made by Dylan Marin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
