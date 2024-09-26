'use client';
import { useColorContext } from '@/app/colors/providers';
import { getPalette } from '@/lib/colorsgenerator';
import React from 'react';

export default function ColorShades() {
  const { color } = useColorContext();
  if (color === '') {
    return null;
  }

  const palette = getPalette(color);

  return (
    <div className="flex gap-2 justify-center flex-wrap pt-5">
      {palette.map((el, index) => (
        <div
          key={index}
          style={{ backgroundColor: el }}
          className="w-16 h-16 rounded"
        >
          {el}
        </div>
      ))}
    </div>
  );
}
