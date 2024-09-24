import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Turn Inspiration into a Palette
          </h1>
          <p className="py-6">
            Ever find a color you love while browsing the web? With our color
            picker, you can capture any color from your screen and instantly
            build a complete Tailwind CSS palette around it. Effortlessly
            transform inspiration into a fully customizable design tool for your
            next project!
          </p>
          <Link href="/colors">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
