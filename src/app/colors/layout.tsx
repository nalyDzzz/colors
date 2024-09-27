import { ReactNode } from 'react';
import { ColorContextProvider } from './providers';
import { Toaster } from '@/components/ui/toaster';

export default function ColorLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <ColorContextProvider>{children}</ColorContextProvider>
      <Toaster />
    </main>
  );
}
