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

    caseStudy?: {
        overview: { en: string; he: string };
        problem: { en: string; he: string };
        solution: { en: string; he: string };
        challenges: { en: string; he: string }[];
        results: { en: string; he: string };
        highlights?: string[];
    };
};

export const projects: Project[] = [
    {
        slug: "billy-ai-invoice-manager",
        title: { en: "Billy – AI Invoice Manager", he: "Billy – מנהל קבלות עם בינה מלאכותית" },
        summary: {
            en: "Pulls receipts from Gmail and auto-parses totals, vendors, and dates with AI.",
            he: "שולף קבלות מ-Gmail ומנתח אוטומטית סכומים, ספקים ותאריכים בעזרת AI.",
        },
        stack: ["Next.js", "TypeScript", "Node.js", "Gmail API", "OpenAI", "Prisma", "PostgreSQL", "Tailwind"],
        images: ["/projects/billy/cover.png"],
        repo: "https://github.com/EAosu/invoice-manager",
        demo: "",
        featured: true,
        caseStudy: {
            overview: {
                en: "A full-stack app that connects to Gmail, fetches receipt emails, and uses AI to extract key fields into a searchable dashboard.",
                he: "אפליקציית פולסטאק שמתחברת ל-Gmail, מושכת מיילי קבלות, ומשתמשת ב-AI כדי לחלץ שדות חשובים ללוח ניהול חכם.",
            },
            problem: {
                en: "Freelancers and small businesses waste time tracking receipts scattered across email threads.",
                he: "פרילנסרים ועסקים קטנים מבזבזים זמן על מעקב קבלות מפוזרות בין מיילים.",
            },
            solution: {
                en: "OAuth to Gmail, fetch receipt-like threads, run AI parsing (vendor/total/date/currency), persist to Postgres via Prisma, and expose a clean dashboard with filters.",
                he: "OAuth ל-Gmail, משיכת שרשורי קבלות, פירוק בעזרת AI (ספק/סכום/תאריך/מטבע), שמירה ב-Postgres דרך Prisma וממשק דשבורד נקי עם פילטרים.",
            },
            challenges: [
                {
                    en: "Handling varied email templates and low-quality scans; fallbacks combining regex + model hints.",
                    he: "תבניות אימייל מגוונות וסריקות באיכות נמוכה; פתרון היברידי של regex + רמזים למודל.",
                },
                {
                    en: "Robust Gmail sync without quota spikes; incremental fetch and idempotent upserts.",
                    he: "סנכרון Gmail יציב בלי חריגת מכסות; משיכות אינקרמנטליות ו-upsert אידמפוטנטי.",
                },
                {
                    en: "Multi-currency totals; normalize amounts and timestamps to a single canonical format.",
                    he: "ריבוי מטבעות; נרמול סכומים וזמנים לפורמט קנוני אחיד.",
                },
            ],
            results: {
                en: "Zero-copy data entry, faster monthly reporting, and reliable search by vendor/date/amount.",
                he: "ביטול הזנת נתונים ידנית, דוחות חודשיים מהירים וחיפוש מהימן לפי ספק/תאריך/סכום.",
            },
            highlights: [
                "Gmail OAuth + safe incremental sync",
                "AI extraction with fallback rules",
                "Postgres + Prisma schema with idempotent upserts",
                "Clean dashboard, filters & pagination",
            ],
        },
    },
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
