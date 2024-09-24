import { ReactNode } from 'react';
import { ColorContextProvider } from './providers';

export default function ColorLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <ColorContextProvider>{children}</ColorContextProvider>
    </main>
  );
}
