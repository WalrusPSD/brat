import React, { useState, useRef } from 'react';
import { styles } from '../styles/BratGenerator.styles';
import { generateImage } from '../utils/imageGenerator';

const BratGenerator: React.FC = () => {
  const [text, setText] = useState<string>('brat');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div ref={containerRef} style={styles.container}>
      <div style={styles.content}>
        <div style={styles.output}>{text}</div>
      </div>
      <div style={styles.controls}>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="type here..."
          style={styles.input}
        />
      </div>
      <div style={styles.above_footer}> take a screenshot to save</div>
      <div style={styles.footer}>by zahir ❤️</div>
    </div>
  );
};

export default BratGenerator;