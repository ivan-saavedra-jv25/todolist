import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Button
      variant={darkMode ? 'light' : 'outline-light'}
      size="sm"
      className="ms-2"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? '☀️ Claro' : '🌙 Oscuro'}
    </Button>
  );
};

export default ThemeToggle;
