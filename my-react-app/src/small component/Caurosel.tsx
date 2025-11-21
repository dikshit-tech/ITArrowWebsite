import { useState, useMemo } from "react";

type Slide = {
    id: number;
    title?: string;
    color?: string;
    img?: string;
};

const slidesData: Slide[] = [
    { id: 1, title: "Slide 1", color: "#f87171" },
    { id: 2, title: "Slide 2", color: "#fb923c" },
    { id: 3, title: "Slide 3", color: "#fbbf24" },
    { id: 4, title: "Slide 4", color: "#34d399" },
    { id: 5, title: "Slide 5", color: "#60a5fa" },
    { id: 6, title: "Slide 6", color: "#a78bfa" },
];

const VISIBLE = 5;

export default function Caurosel() {
    const slides = slidesData;
    const maxIndex = Math.max(0, slides.length - VISIBLE);
    const [index, setIndex] = useState<number>(0);

    const slideWidthPercent = 100 / VISIBLE; // each slide takes 1/VISIBLE of container

    const trackWidthPercent = (slides.length * slideWidthPercent);

    const pages = useMemo(() => maxIndex + 1, [maxIndex]);

    const prev = () => setIndex((p) => (p <= 0 ? maxIndex : p - 1));
    const next = () => setIndex((p) => (p >= maxIndex ? 0 : p + 1));
    const goTo = (page: number) => setIndex(page);

    return (
        <div style={{ width: "100%", boxSizing: "border-box" }}>
            <div
                style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                }}
            >
                {/* Track */}
                <div
                    style={{
                        display: "flex",
                        width: `${trackWidthPercent}%`,
                        transform: `translateX(-${index * slideWidthPercent}%)`,
                        transition: "transform 300ms ease",
                    }}
                >
                    {slides.map((s) => (
                        <div
                            key={s.id}
                            style={{
                                flex: `0 0 ${slideWidthPercent}%`,
                                boxSizing: "border-box",
                                padding: 8,
                            }}
                        >
                            <div
                                style={{
                                    height: 200,
                                    borderRadius: 8,
                                    background: s.color ?? "#ddd",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    fontSize: 20,
                                    fontWeight: 600,
                                    userSelect: "none",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                                }}
                            >
                                {s.title ?? `Slide ${s.id}`}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    onClick={prev}
                    aria-label="Previous"
                    style={{
                        position: "absolute",
                        left: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0,0,0,0.5)",
                        color: "#fff",
                        border: "none",
                        width: 36,
                        height: 36,
                        borderRadius: 18,
                        cursor: "pointer",
                    }}
                >
                    ‹
                </button>
                <button
                    onClick={next}
                    aria-label="Next"
                    style={{
                        position: "absolute",
                        right: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0,0,0,0.5)",
                        color: "#fff",
                        border: "none",
                        width: 36,
                        height: 36,
                        borderRadius: 18,
                        cursor: "pointer",
                    }}
                >
                    ›
                </button>
            </div>

            {/* Dots */}
            <div
                style={{
                    display: "flex",
                    gap: 8,
                    justifyContent: "center",
                    marginTop: 12,
                }}
            >
                {Array.from({ length: pages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            border: "none",
                            background: i === index ? "#111827" : "#d1d5db",
                            cursor: "pointer",
                            padding: 0,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}