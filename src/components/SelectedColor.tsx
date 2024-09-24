'use client';
import { useColorContext } from '@/app/colors/providers';

export default function SelectedColor() {
  const { color } = useColorContext();
  return (
    <>
      <span className="text-base-content">Selected Color: {color}</span>
      <div
        className="w-12 h-12 border rounded-lg"
        style={{ backgroundColor: color }}
      ></div>
    </>
  );
}
