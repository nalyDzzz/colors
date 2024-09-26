'use client';
import { useState, createContext, ReactNode, useContext } from 'react';

export type ColorContextType = {
  color: string;
  changeColor: (hex: string) => void;
  base: string;
  changeBase: (input: string) => void;
};

export const ColorContext = createContext<ColorContextType | null>(null);

export const ColorContextProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState('');
  const [base, setBase] = useState('');

  const changeBase = (input: string) => {
    setBase(input);
  };

  const changeColor = (hex: string) => {
    setColor(hex);
  };

  return (
    <ColorContext.Provider value={{ color, changeColor, base, changeBase }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () =>
  useContext(ColorContext) as ColorContextType;
