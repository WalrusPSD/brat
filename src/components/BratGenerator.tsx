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
      <div style={styles.content}>
        <div style={styles.output}>{text}</div>
      </div>
      <div style={styles.controls}>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Type here..."
          style={styles.input}
        />
        <button onClick={handleDownload} style={styles.button}>
          download
        </button>
      </div>
      <div style={styles.footer}>by zahir ❤️</div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default BratGenerator;