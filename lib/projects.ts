// lib/projects.ts
export type Project = {
    slug: string;
    title: { en: string; he: string };
    summary: { en: string; he: string };
    stack: string[];
    images?: string[];
    repo?: string;
    demo?: string;
    featured?: boolean;
    createdAt?: string;
};

export const projects: Project[] = [
    {
        slug: "invoice-manager-2",
        title: {
            en: "Invoice Manager 2.0",
            he: "Invoice Manager 2.0",
        },
        summary: {
            en: "AI-assisted invoice/receipt classifier with Google OAuth and dashboard.",
            he: "סיווג חשבוניות/קבלות בעזרת AI עם Google OAuth ודשבורד.",
        },
        stack: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "OpenAI", "Tailwind"],
        images: ["/projects/invoice1.png"],
        repo: "https://github.com/EAosu/invoice-manager",
        demo: "https://invoice-demo.example",
        featured: true,
        createdAt: "2025-09-25"
    },
    {
        slug: "shirat-hayam-ordering",
        title: {
            en: "Shirat-Hayam Ordering",
            he: "הזמנות שירת הים",
        },
        summary: {
            en: "Modern ordering flow with cart, responsive design, and admin controls.",
            he: "זרימת הזמנה מודרנית עם עגלה, רספונסיביות וניהול אדמין.",
        },
        stack: ["Next.js", "TypeScript", "Stripe-ready", "Tailwind"],
        images: ["/projects/shirat1.png"],
        featured: true,
        createdAt: "2025-08-10"
    },
];
