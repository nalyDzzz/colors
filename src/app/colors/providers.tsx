'use client';
import { useState, createContext, ReactNode, useContext } from 'react';

export type ColorContextType = {
  color: string;
  changeColor: (hex: string) => void;
  base: string;
  changeBase: (input: string) => void;
  name: string;
  changeName: (input: string) => void;
  input: string;
  changeInput: (input: string) => void;
};

export const ColorContext = createContext<ColorContextType | null>(null);

export const ColorContextProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState('');
  const [base, setBase] = useState('500');
  const [name, setName] = useState('');
  const [input, setInput] = useState('#');

  const changeBase = (input: string) => {
    setBase(input);
  };

  const changeColor = (hex: string) => {
    setColor(hex);
  };

  const changeName = (input: string) => {
    input = input.replace(/\s/g, '-');
    input = input.replace(/[^-\w+]/g, '');
    setName(input);
  };

  const changeInput = (input: string) => {
    if (input[1] === '#') {
      const newValue = input.slice(1);
      return setInput(newValue);
    }
    if (input[0] !== '#') {
      const newValue = '#' + input;
      return setInput(newValue);
    }
    setInput(input);
  };

  return (
    <ColorContext.Provider
      value={{
        color,
        changeColor,
        base,
        changeBase,
        name,
        changeName,
        input,
        changeInput,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () =>
  useContext(ColorContext) as ColorContextType;
