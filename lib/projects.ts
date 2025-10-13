export type Project = {
    slug: string;
    title: { en: string; he: string };
    summary: { en: string; he: string };
    stack: string[];
    images?: string[]; // public paths
    repo?: string;
    demo?: string;
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
        images: ["/projects/invoice1.png", "/projects/invoice2.png"],
        repo: "https://github.com/EAosu/invoice-manager",
        demo: "https://invoice-demo.example", // תחליף כשיהיה
    },
];
