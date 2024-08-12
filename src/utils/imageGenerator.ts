export const generateImage = (canvas: HTMLCanvasElement, text: string): void => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
  
    canvas.width = 1000;
    canvas.height = 1000;
  
    // Set background
    ctx.fillStyle = '#8BCF00';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // Set text properties
    ctx.fillStyle = 'black';
    ctx.font = '250px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
  
    // Apply transform for horizontal squish
    ctx.setTransform(0.8, 0, 0, 1.03, 500, 500);
  
    // Draw text
    ctx.fillText(text || 'brat', 0, 0);
  
    // Apply bicubic-like transform and additional degradation
    ctx.filter = 'blur(3px) contrast(150%) brightness(120%)';
    ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
    ctx.drawImage(canvas, 0, 0);
  
    // Create download link
    const link = document.createElement('a');
    link.download = 'brat.jpg';
    link.href = canvas.toDataURL('image/jpeg', 0.1);
    link.click();
  };