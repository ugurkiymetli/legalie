// SignatureCanvas.tsx

import React, { useState, useRef } from 'react';

interface SignatureCanvasProps {
  onSave: (dataURL: string) => void;
  onClear: () => void; // Add a new prop for clearing the canvas
}

const SignatureCanvas: React.FC<SignatureCanvasProps> = ({
  onSave,
  onClear,
}) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lastX = useRef<number | null>(null);
  const lastY = useRef<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDrawing(true);
    const canvas = canvasRef.current!;
    const context = canvas.getContext('2d')!;
    [lastX.current, lastY.current] = [
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY,
    ];
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.lineCap = 'round';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current!;
    const context = canvas.getContext('2d')!;
    const [x, y] = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
    context.beginPath();
    context.moveTo(lastX.current!, lastY.current!);
    context.lineTo(x, y);
    context.stroke();
    [lastX.current, lastY.current] = [x, y];
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleSave = () => {
    const canvas = canvasRef.current!;
    const dataURL = canvas.toDataURL('image/png');
    console.log({ dataURL });
    onSave(dataURL);
  };

  const handleClear = () => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext('2d')!;
    context.clearRect(0, 0, canvas.width, canvas.height);
    onClear(); // Invoke the onClear callback
  };

  const handleDownload = () => {
    const canvas = canvasRef.current!;
    const dataURL = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = 'signature.png';
    a.click();
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={350} // Set your desired canvas width
        height={250} // Set your desired canvas height
        style={{ border: '1px solid #ccc' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      <div>
        <button onClick={handleSave} className="btn btn-primary mt-2">
          Save Signature
        </button>
        <button onClick={handleDownload} className="btn btn-dark ml-2 mt-2">
          Download Signature
        </button>
        <button onClick={handleClear} className="btn btn-danger mt-2">
          Clear Signature
        </button>
      </div>
    </div>
  );
};

export default SignatureCanvas;
