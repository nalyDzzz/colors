import ColorShades from '@/components/ColorShades';
import PickColorButton from '@/components/PickColorButton';
import SelectedColor from '@/components/SelectedColor';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function ColorPicker() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-20 p-4 container mx-auto">
      <h1 className="text-4xl font-bold pb-2 text-center">
        Select a Color and Generate a Palette
      </h1>
      <div className="w-full px-6 flex flex-col justify-center items-center">
        <p className="text-muted-foreground mb-4 text-center">
          Browse your screen, find a color you love, and click the eyedropper
          below to capture it!
        </p>
        <PickColorButton />
        <div className="mt-5">
          <SelectedColor />
        </div>
        <ColorShades />
        <Button className="w-fit mt-6 font-bold py-2 px-4 rounded">
          Export
        </Button>
      </div>
    </div>
  );
}
