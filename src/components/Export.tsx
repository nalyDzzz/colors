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
import { generateTailwindConfig } from '@/lib/colorsgenerator';
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
            <TabsList>
              <TabsTrigger value="tailwind">Tailwind</TabsTrigger>
              <TabsTrigger value="css">CSS</TabsTrigger>
            </TabsList>
            <TailWindTab />
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
}

const TailWindTab = () => {
  const { color, base } = useColorContext();
  if (!color || color === '') {
    return null;
  }
  const tailwindconfig = generateTailwindConfig(color, parseInt(base));
  return (
    <TabsContent value="tailwind">
      <div>
        <pre>{tailwindconfig}</pre>
      </div>
    </TabsContent>
  );
};
