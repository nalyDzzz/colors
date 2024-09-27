'use client';

import React from 'react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from './ui/dialog';
import { Tabs, TabsTrigger, TabsContent, TabsList } from './ui/tabs';
import {
  generateHexCss,
  generateHslCss,
  generateRgbCss,
  generateTailwindHexConfig,
} from '@/lib/colorsgenerator';
import { useColorContext } from '@/app/colors/providers';

export default function Export() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-fit mt-6 font-bold py-2 px-4 rounded">
            Export
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Choose export type</DialogTitle>
          </DialogHeader>
          <Tabs>
            <TabsList className="grid w-full h-fit grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="tailwindhex">Tailwind (HEX)</TabsTrigger>
              <TabsTrigger value="csshex">CSS (HEX)</TabsTrigger>
              <TabsTrigger value="csshsl">CSS (HSL)</TabsTrigger>
              <TabsTrigger value="cssrgb">CSS (RGB)</TabsTrigger>
            </TabsList>
            <TailWindTab type="tailwindhex" />
            <TailWindTab type="csshex" />
            <TailWindTab type="csshsl" />
            <TailWindTab type="cssrgb" />
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
}

interface TailWindTabProps {
  type: 'tailwindhex' | 'csshex' | 'cssrgb' | 'csshsl';
}

const TailWindTab: React.FC<TailWindTabProps> = ({ type }) => {
  const { color, base } = useColorContext();
  if (!color || color === '') {
    return null;
  }
  let tailwindconfig: string;
  switch (type) {
    case 'tailwindhex':
      tailwindconfig = generateTailwindHexConfig(color, parseInt(base));
      break;
    case 'csshex':
      tailwindconfig = generateHexCss(color, parseInt(base));
      break;
    case 'csshsl':
      tailwindconfig = generateHslCss(color, parseInt(base));
      break;
    case 'cssrgb':
      tailwindconfig = generateRgbCss(color, parseInt(base));
      break;
  }
  return (
    <TabsContent value={type}>
      <div className="relative">
        <pre>{tailwindconfig}</pre>
      </div>
    </TabsContent>
  );
};
