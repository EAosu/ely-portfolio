import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://ely-portfolio.vercel.app"),
    title: "Ely Asaf - Full-Stack Developer",
    description: "Bilingual (EN/HE) portfolio. React, Next.js, Node.js, Prisma, Tailwind.",
    alternates: {
        canonical: "/",
        languages: {
            "en": "/en",
            "he": "/he",
        },
    },
    openGraph: {
        title: "Ely Asaf - Full-Stack Portfolio",
        description: "Projects, case studies, and live demos.",
        url: "https://ely-portfolio.vercel.app",
        siteName: "Ely Asaf",
        images: [{ url: "/og.png", width: 1200, height: 630 }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ely Asaf - Full-Stack Portfolio",
        description: "Projects, case studies, and live demos.",
        images: ["/og.png"],
    },
    icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
