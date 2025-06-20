import { useState, useEffect } from 'react';

export default function Confetti({ active }) {
    const [pieces, setPieces] = useState([]);
    const colors = ['#4f46e5', '#818cf8', '#c7d2fe', '#38bdf8', '#7dd3fc', '#bae6fd'];

    useEffect(() => {
        if (!active) {
            setPieces([]);
            return;
        }

        // Create confetti pieces
        const newPieces = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: -20 - Math.random() * 10,
            size: 5 + Math.random() * 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            speedX: -2 + Math.random() * 4,
            speedY: 5 + Math.random() * 5,
            speedRotation: -1 + Math.random() * 2,
        }));

        setPieces(newPieces);

        // Cleanup
        return () => {
            setPieces([]);
        };
    }, [active]);

    useEffect(() => {
        if (pieces.length === 0) return;

        const interval = setInterval(() => {
            setPieces(prevPieces =>
                prevPieces
                    .map(piece => ({
                        ...piece,
                        x: piece.x + piece.speedX,
                        y: piece.y + piece.speedY,
                        rotation: piece.rotation + piece.speedRotation,
                    }))
                    .filter(piece => piece.y < 120) // Remove pieces that fall out of view
            );
        }, 50);

        return () => clearInterval(interval);
    }, [pieces.length]);

    if (!active) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
            {pieces.map(piece => (
                <div
                    key={piece.id}
                    className="absolute rounded-sm"
                    style={{
                        left: `${piece.x}%`,
                        top: `${piece.y}%`,
                        width: `${piece.size}px`,
                        height: `${piece.size * 0.6}px`,
                        backgroundColor: piece.color,
                        transform: `rotate(${piece.rotation}deg)`,
                    }}
                />
            ))}
        </div>
    );
}
