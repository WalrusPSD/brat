import React, { useState, useRef } from 'react';
import { styles } from '../styles/BratGenerator.styles';
import { generateImage } from '../utils/imageGenerator';

const BratGenerator: React.FC = () => {
  const [text, setText] = useState<string>('brat');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleDownload = () => {
    if (canvasRef.current) {
      generateImage(canvasRef.current, text);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.output}>{text}</div>
      <div style={styles.controls}>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Type here..."
          style={styles.input}
        />
        <button onClick={handleDownload} style={styles.button}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={styles.icon}>
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
        </button>
      </div>
      <div style={styles.footer}>by zahir</div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default BratGenerator;