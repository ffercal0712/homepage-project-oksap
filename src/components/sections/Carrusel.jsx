import { useEffect, useRef } from "react";

export function Carrusel({ children, duration = 3 }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const items = containerRef.current.querySelectorAll(".carousel-item");
        const total = items.length;

        items.forEach((item, index) => {
            // Calcula delay automáticamente según el número de items
            item.style.animationDelay = `${(duration * index)}s`;
            item.style.animationDuration = `${duration * total}s`;
        });
    }, [children, duration]);

    return (
        <div className="carousel" ref={containerRef}>
            {children}
        </div>
    );
}