'use client';
import { useColorContext } from '@/app/colors/providers';
import { generatePalette } from '@/lib/colorsgenerator';
import React from 'react';

export default function ColorShades() {
  const { color } = useColorContext();
  if (color === '') {
    return null;
  }
  const { colors } = generatePalette(color);

  return (
    <div className="flex gap-2 justify-center flex-wrap pt-5">
      {colors.map((el, index) => (
        <div
          key={index}
          style={{ backgroundColor: el.hex() }}
          className="w-12 h-12 rounded"
        >
          {el.hex()}
        </div>
      ))}
    </div>
  );
}

/* 

ROSE COLOR // RED
50: 100% S 97% L
100: 100% S 95% L
200: 96% S 90% L
300: 96% S 82% L
400: 95% S 71% L
500: 89% S 60% L
600: 77% S 50% L
700: 83% S 41% L
800: 80% S 35% L
900: 75% S 30% L
950: 88% S 16% L

BLUE COLOR
50: 100% S 97% L
100: 95% S 93% L
200: 97% S 87% L
300: 96% S 78% L
400: 94% S 68% L
500: 91% S 60% L
600: 83% S 53% L
700: 76% S 48% L
800: 71% S 40% L
900: 64% S 33% L
950: 57% S 21% L

GREEN COLOR
50: 76% S 97% L
100: 84% S 93% L
200: 79% S 85% L
300: 77% S 73% L
400: 69% S 58% L
500: 71% S 45% L
600: 76% S 36% L
700: 72% S 29% L
800: 64% S 24% L
900: 61% S 20% L
950: 80% S 10% L

*/
