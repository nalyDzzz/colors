'use client';
import { useColorContext } from '@/app/colors/providers';
import { getContrastColor, getShadePalette } from '@/lib/colorsgenerator';
import { cn } from '@/lib/utils';
import chroma from 'chroma-js';
import React from 'react';
import { useClipboard } from '@mantine/hooks';
import { useToast } from '@/hooks/use-toast';

export default function ColorShades() {
  const { toast } = useToast();
  const clipboard = useClipboard();
  const { base, color } = useColorContext();
  if (color === '' || !chroma.valid(color)) {
    return null;
  }

  const handleCopy = (hex: string) => {
    clipboard.copy(hex);
    toast({
      description: `Copied ${hex}`,
      duration: 1000,
    });
  };

  const palette = getShadePalette(color, parseInt(base));

  return (
    <div className="flex gap-2 justify-center align-middle items-center flex-wrap pt-5">
      {Object.entries(palette).map(([shade, hex], index) => {
        const backgroundColor =
          typeof hex === 'string' ? hex : chroma(hex).hex();
        return (
          <div
            key={index}
            style={{ backgroundColor }}
            className={cn(
              'w-20 h-20 rounded flex justify-center items-end relative',
              {
                'w-24 h-24': color === backgroundColor,
              }
            )}
          >
            <div
              style={{
                color: getContrastColor(hex),
              }}
              className="flex flex-col items-center hover:cursor-pointer"
              onClick={() => handleCopy(backgroundColor)}
            >
              <p className="font-semibold">{shade}</p>
              <p className="font-semibold">
                {backgroundColor.replace('#', '').toUpperCase()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
