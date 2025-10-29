// components/VideoPlayer.tsx
"use client";
import React from "react";

export default function VideoPlayer({
                                        src,
                                        poster,
                                        provider,
                                        className,
                                    }: {
    src: string;
    poster?: string;
    provider?: "file" | "youtube" | "vimeo";
    className?: string;
}) {
    // Auto-detect if not provided
    const kind =
        provider ||
        (src.includes("youtube.com") || src.includes("youtu.be")
            ? "youtube"
            : src.includes("vimeo.com")
                ? "vimeo"
                : "file");

    if (kind === "youtube") {
        const id =
            src.match(/v=([^&]+)/)?.[1] || src.split("/").pop()?.split("?")[0] || "";
        return (
            <iframe
                className={className}
                src={`https://www.youtube.com/embed/${id}`}
                title="Project video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        );
    }

    if (kind === "vimeo") {
        const id = src.split("/").pop();
        return (
            <iframe
                className={className}
                src={`https://player.vimeo.com/video/${id}`}
                title="Project video"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
            />
        );
    }

    return (
        <video
            className={className}
            controls
            preload="metadata"
            poster={poster}
            style={{ borderRadius: 16 }}
        >
            <source src={src} />
            Your browser does not support the video tag.
        </video>
    );
}
