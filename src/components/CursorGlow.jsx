import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX - 225, y: e.clientY - 225 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
      aria-hidden="true"
    />
  );
}
