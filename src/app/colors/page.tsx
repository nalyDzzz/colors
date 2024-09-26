import ColorShades from '@/components/ColorShades';
import PickColorButton from '@/components/PickColorButton';
import SelectedColor from '@/components/SelectedColor';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function ColorPicker() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 container mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Select a Color and Generate a Tailwind Palette
      </h1>

      <div className="w-full p-6 flex flex-col justify-center items-center">
        <p className="text-base-content mb-4 text-center">
          Browse your screen, find a color you love, and click the eyedropper
          below to capture it!
        </p>
        <PickColorButton />
        <div className="mt-6 flex items-center justify-between">
          <SelectedColor />
        </div>
        <ColorShades />
        <Button
          variant="secondary"
          className="w-fit mt-6 text-secondary-content font-bold py-2 px-4 rounded"
        >
          Generate Tailwind Config
        </Button>
      </div>
    </div>
  );
}
