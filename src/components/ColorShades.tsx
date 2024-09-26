'use client';
import { useColorContext } from '@/app/colors/providers';
import { getPalette } from '@/lib/colorsgenerator';
import chroma from 'chroma-js';
import React from 'react';

export default function ColorShades() {
  const { base, color } = useColorContext();
  if (color === '' || !chroma.valid(color)) {
    return null;
  }

  const palette = getPalette(color, parseInt(base));

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
