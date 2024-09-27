'use client';
import React, { useEffect, useState } from 'react';
import { useEyeDropper } from '@mantine/hooks';
import { FaEyeDropper } from 'react-icons/fa';
import { useColorContext } from '@/app/colors/providers';
import chroma from 'chroma-js';

export default function PickColorButton() {
  const { color, changeColor } = useColorContext();
  const { supported, open } = useEyeDropper();
  const [input, setInput] = useState('#');

  const pickColor = async () => {
    try {
      const { sRGBHex } = (await open())!;
      setInput(sRGBHex);
    } catch (e) {
      console.log(e);
      return;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value[1] === '#') {
      const newValue = e.target.value.slice(1);
      return setInput(newValue);
    }
    if (e.target.value[0] !== '#') {
      const newValue = '#' + e.target.value;
      return setInput(newValue);
    }
    setInput(e.target.value);
  };

  useEffect(() => {
    if (chroma.valid(input)) {
      changeColor(input);
    }
  }, [input, changeColor]);

  return (
    <div className="relative flex items-center h-10 md:w-96 rounded-md border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
      <label
        className="absolute ml-1 w-7 h-7 rounded-3xl shadow-lg cursor-pointer"
        style={{ backgroundColor: color === '' ? 'gray' : color }}
      >
        <input
          type="color"
          value={color}
          onChange={handleChange}
          className="opacity-0 absolute w-full inset-0 cursor-pointer"
        />
      </label>
      <input
        type="text"
        placeholder="#"
        value={input}
        onChange={handleChange}
        maxLength={8}
        className="pl-10 bg-transparent w-full h-full placeholder:text-muted"
      />
      <button
        className="absolute right-2 hover:bg-white/20 p-1 enabled:active:scale-90 disabled:pointer-events-none disabled:opacity-50"
        onClick={pickColor}
        disabled={!supported}
      >
        <FaEyeDropper />
      </button>
    </div>
  );
}
