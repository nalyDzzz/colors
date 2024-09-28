'use client';
import React from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { getContrastColor } from '@/lib/colorsgenerator';

export default function Recents() {
  const [value, , removeValue] = useLocalStorage<string[]>({
    key: 'colors',
  });
  if (
    !value ||
    !Array.isArray(value) ||
    !value.every((item) => typeof item === 'string')
  )
    return null;
  return (
    <div className="w-4/6 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 sm:mt-4 mt-10 relative items-center">
      <button
        className="absolute right-2 top-[-2rem]"
        onClick={() => removeValue()}
      >
        Clear Recents
      </button>
      {value.map((c) => (
        <div
          key={c}
          className="rounded aspect-square flex items-end justify-center"
          style={{ backgroundColor: c, color: getContrastColor(c) }}
        >
          <div className="flex justify-center">
            <p className="font-semibold">{c.replace('#', '').toUpperCase()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
