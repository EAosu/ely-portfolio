import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const BASE = "https://ely-portfolio.vercel.app";
const locales: ("en" | "he")[] = ["en", "he"];

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        "",
        "/en",
        "/he",
        "/en/projects",
        "/he/projects",
        "/en/about",
        "/he/about",
    ];

    const staticEntries = staticRoutes.map((p) => ({
        url: `${BASE}${p}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: p === "" ? 1 : 0.8,
    }));

    const projectEntries = projects.flatMap((p) =>
        locales.map((loc) => ({
            url: `${BASE}/${loc}/projects/${p.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        }))
    );

    return [...staticEntries, ...projectEntries];
}
