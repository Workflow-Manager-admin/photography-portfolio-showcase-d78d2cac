import React, { useState, useEffect } from 'react';
import './App.css';
import ImageWrapper from './components/ImageWrapper';

function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        background: '#fff'
      }}>
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          style={{
            marginBottom: 24,
            background: 'none',
            border: '1px solid #ddd',
            borderRadius: '6px',
            padding: '8px 20px',
            cursor: 'pointer',
            fontSize: '18px',
            color: '#333'
          }}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <ImageWrapper />
      </header>
    </div>
  );
}

export default App;
