"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 77;

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll();

    // 1. Preload Images
    useEffect(() => {
        let loadedCount = 0;
        const imgs: HTMLImageElement[] = [];

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            const paddedIndex = i.toString().padStart(3, "0");
            img.src = `/sequence/${paddedIndex}.png`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setIsLoaded(true);
                }
            };
            imgs.push(img);
        }
        imagesRef.current = imgs;
    }, []);

    // 2. Draw Logic
    const render = (index: number) => {
        const canvas = canvasRef.current;
        const images = imagesRef.current;

        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];

        if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
            canvas.width = window.innerWidth * window.devicePixelRatio;
            canvas.height = window.innerHeight * window.devicePixelRatio;
            ctx?.scale(window.devicePixelRatio, window.devicePixelRatio);
        }

        // Adjust for device pixel ratio in calculations if needed, or just use css width/height
        // The original code was fine but let's make sure it handles high DPI if we want sharpness. 
        // For now, let's stick to the simple resizing but ensure style width/height is 100%

        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.width;
        const ih = img.height;

        const targetRatio = cw / ch;
        const imgRatio = iw / ih;

        let sx = 0, sy = 0, sWidth = iw, sHeight = ih;

        if (targetRatio > imgRatio) {
            sHeight = iw / targetRatio;
            sy = (ih - sHeight) / 2;
        } else {
            sWidth = ih * targetRatio;
            sx = (iw - sWidth) / 2;
        }

        ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, cw, ch);
    };

    // 3. React to Scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded) return;

        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(latest * FRAME_COUNT)
        );

        requestAnimationFrame(() => render(frameIndex));
    });

    // Handle Resize & Initial Draw
    useEffect(() => {
        if (!isLoaded) return;

        render(0);

        const handleResize = () => {
            render(0);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded]);

    return (
        <div className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="block w-full h-full" />
            </div>
        </div>
    );
}
