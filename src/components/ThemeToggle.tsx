'use client';
import { useTheme } from 'next-themes';
import { FaRegMoon, FaSun } from 'react-icons/fa';
import React from 'react';
import { Button } from './ui/button';

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const changeTheme = () => {
    if (theme === 'light') return setTheme('dark');
    if (theme === 'dark') return setTheme('light');
  };
  return (
    <div className="absolute right-2 top-2">
      <Button size="icon" onClick={changeTheme}>
        <FaRegMoon className="w-6 h-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-1000" />
        <FaSun className="absolute w-6 h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 duration-1000" />
      </Button>
    </div>
  );
}
