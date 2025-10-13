export const metadata = {
    metadataBase: new URL("https://ely-portfolio.vercel.app"),
    title: "Ely Asaf — Full-Stack Portfolio",
    description: "Bilingual (EN/HE) portfolio. React, Node.js, Prisma, Tailwind.",
    openGraph: {
        title: "Ely Asaf — Full-Stack Portfolio",
        description: "Projects, case studies, and live demos.",
        url: "https://ely-portfolio.vercel.app",
        siteName: "Ely Asaf",
        images: [{
            url: "https://ely-portfolio.vercel.app/og.png",
            width: 1200,
            height: 630,
        }],
        locale: "en_US",
        type: "website"
    },
    icons: { icon: "/favicon.ico" }
};

export default function Root({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}