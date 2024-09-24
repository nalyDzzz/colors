import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Discover Your Perfect Palette</h1>
          <p className="py-6">
            Effortlessly pick any color from your screen with our intuitive
            color picker. Simply click the eyedropper, choose your desired hue,
            and instantly generate a Tailwind CSS configuration. Elevate your
            design workflow and bring your creativity to life with just a few
            clicks.
          </p>
          <Link href="/colors">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
