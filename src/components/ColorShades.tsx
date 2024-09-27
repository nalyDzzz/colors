'use client';
import { useColorContext } from '@/app/colors/providers';
import { getShadePalette } from '@/lib/colorsgenerator';
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
      {Object.entries(palette).map((el, index) => {
        return (
          <div
            key={index}
            style={{ backgroundColor: el[1] }}
            className={cn(
              'w-20 h-20 rounded flex justify-center items-end relative',
              {
                'w-24 h-24': color === el[1],
              }
            )}
          >
            <div
              style={{
                color: parseInt(el[0]) <= 400 ? palette[950] : palette[50],
              }}
              className="flex flex-col items-center hover:cursor-pointer"
              onClick={() => handleCopy(el[1])}
            >
              <p className="font-semibold">{el[0]}</p>
              <p className="font-semibold">
                {el[1].replace('#', '').toUpperCase()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
