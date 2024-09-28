'use client';
import { FaCopy } from 'react-icons/fa6';
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
import { useClipboard, useLocalStorage } from '@mantine/hooks';
import { useToast } from '@/hooks/use-toast';
import { Input } from './ui/input';

export default function Export() {
  const { color, changeName, name } = useColorContext();
  const [value, setValue] = useLocalStorage<string[]>({
    key: 'colors',
    defaultValue: [],
  });

  const addToLocalStorage = () => {
    if (!color || color === '') return;
    if (value.length >= 29) {
      const newValue = value.splice(-1, 1);
      setValue([color, ...newValue]);
    }
    setValue([color, ...value]);
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="w-fit mt-6 font-bold py-2 px-4 rounded"
            onClick={addToLocalStorage}
          >
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
            <div className="flex pt-2 justify-center">
              <Input
                className="w-2/4"
                placeholder="Color Name"
                onChange={(e) => changeName(e.target.value)}
                value={name}
                type="text"
              />
            </div>

            <ExportTab type="tailwindhex" />
            <ExportTab type="csshex" />
            <ExportTab type="csshsl" />
            <ExportTab type="cssrgb" />
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
}

interface TailWindTabProps {
  type: 'tailwindhex' | 'csshex' | 'cssrgb' | 'csshsl';
}

const ExportTab: React.FC<TailWindTabProps> = ({ type }) => {
  const { toast } = useToast();
  const clipboard = useClipboard();
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

  const handleCopy = (config: string) => {
    clipboard.copy(config);
    toast({
      description: `Copied Configuration`,
      duration: 1000,
    });
  };
  return (
    <TabsContent value={type}>
      <div className="relative">
        <button
          className="absolute right-5 top-0 hover:bg-foreground/20 p-1 rounded"
          onClick={() => handleCopy(tailwindconfig)}
        >
          <FaCopy size={'1.5em'} className="text-foreground" />
        </button>
        <pre>{tailwindconfig}</pre>
      </div>
    </TabsContent>
  );
};
