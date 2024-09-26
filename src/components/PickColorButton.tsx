'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { useEyeDropper } from '@mantine/hooks';
import { useColorContext } from '@/app/colors/providers';
import { Dialog, DialogContent, DialogHeader } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { DialogTrigger } from '@radix-ui/react-dialog';

export default function PickColorButton() {
  const [dialogOpen, setOpen] = useState(false);

  return (
    <>
      <Dialog open={dialogOpen} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-32 text-primary-content font-bold py-2 px-4 rounded">
            Pick a Color
          </Button>
        </DialogTrigger>
        <DialogContent className="min-h-60">
          <DialogHeader></DialogHeader>
          <Tabs defaultValue="screen">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="screen">From Screen</TabsTrigger>
              <TabsTrigger value="manual">Select Manually</TabsTrigger>
            </TabsList>
            <ScreenTabContent dialogOpen={dialogOpen} setOpen={setOpen} />
            <ManualTabContent />
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
}

type ScreenTabProps = {
  dialogOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScreenTabContent = ({ dialogOpen, setOpen }: ScreenTabProps) => {
  const { supported, open } = useEyeDropper();
  const { changeColor } = useColorContext();
  const [error, setError] = useState<Error | null>(null);

  const pickColor = async () => {
    try {
      const { sRGBHex } = (await open())!;
      changeColor(sRGBHex);
      setOpen(false);
    } catch (e) {
      if ((e as Error).message.includes('user canceled')) {
        return setError(new Error('No color was selected, user canceled.'));
      } else {
        return setError(new Error('Something went wrong! Try again later!'));
      }
    }
  };

  return (
    <TabsContent value="screen">
      <div className="flex justify-center gap-5 items-center flex-col">
        <p className="text-base-content/80">
          Click on the below button to get started!
        </p>
        {supported && (
          <Button
            className="w-40 text-primary-content rounded"
            onClick={pickColor}
          >
            Select
          </Button>
        )}
        {!supported && (
          <Button
            disabled
            className="w-40 text-primary-content cursor-not-allowed"
          >
            Not available on your device
          </Button>
        )}
        {error?.message}
      </div>
    </TabsContent>
  );
};

const ManualTabContent = () => {
  return (
    <TabsContent value="manual">This is for typing in manually</TabsContent>
  );
};
