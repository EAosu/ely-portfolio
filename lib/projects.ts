export type Project = {
    slug: string;
    title: { en: string; he: string };
    summary: { en: string; he: string };
    stack: string[];
    images?: string[];
    repo?: string;
    demo?: string;
    video?: {
        src: string;
        poster?: string;
        provider?: "file" | "youtube" | "vimeo";
    };
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
    // === HIGHLIGHTS ===
    {
        slug: "billy-ai-invoice-manager",
        title: { en: "Billy - AI Invoice Manager", he: "Billy - מנהל קבלות עם בינה מלאכותית" },
        summary: {
            en:
                "Connect Gmail via OAuth, auto-classify invoices with OpenAI, and extract VAT/total/vendor/date with a clean dashboard.",
            he:
                "OAuth לג׳ימייל, סיווג קבלות אוטומטי בעזרת OpenAI וחילוץ מע״מ/סכום/ספק/תאריך עם דשבורד נקי.",
        },
        stack: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "Gmail API",
            "OpenAI",
            "Prisma",
            "Tailwind",
        ],
        images: ["/projects/invoice-manager/cover.png"],
        repo: "https://github.com/EAosu/invoice-manager",
        video: {
            src: "/videos/billy-demo.mp4", // TODO
            poster: "/videos/posters/billy.jpg", // TODO
            provider: "file",
        },
        featured: true,
        caseStudy: {
            overview: {
                en:
                    "Full-stack pipeline from Gmail to AI extraction into a searchable ledger.",
                he:
                    "צינור פול-סטאק מג׳ימייל לחילוץ מבוסס-AI לתוך יומן חכם ונח לחיפוש.",
            },
            problem: {
                en:
                    "Receipts scattered across threads waste time and introduce errors.",
                he: "קבלות מפוזרות בין מיילים גורמות לבזבוז זמן וטעויות.",
            },
            solution: {
                en:
                    "Gmail OAuth, incremental sync, AI parsing with rule fallbacks, and Postgres via Prisma.",
                he:
                    "OAuth לג׳ימייל, סנכרון אינקרמנטלי, פירוק ב-AI עם כללי גיבוי, ו-Postgres דרך Prisma.",
            },
            challenges: [
                {
                    en: "Template diversity and scanned PDFs; hybrid heuristics.",
                    he: "מגוון תבניות וסריקות PDF; היוריסטיקות היברידיות.",
                },
                {
                    en: "Quotas & idempotency; safe incremental polling.",
                    he: "מכסות ואידמפוטנטיות; משיכות אינקרמנטליות בטוחות.",
                },
            ],
            results: {
                en:
                    "Zero manual entry, faster reporting and reliable filtering by vendor/date/amount.",
                he:
                    "ביטול הזנה ידנית, דוחות מהירים וסינון מהימן לפי ספק/תאריך/סכום.",
            },
            highlights: [
                "Gmail OAuth + incremental sync",
                "AI extraction + fallbacks",
                "Postgres + Prisma",
                "Search & filters",
            ],
        },
    },

    {
        slug: "catering-ordering",
        title: { en: "Catering Ordering", he: "הזמנות קייטרינג" },
        summary: {
            en:
                "Tailored ordering flow. Orders are captured via a menu flow and delivered as PDF to email & WhatsApp.",
            he:
                "תהליך הזמנה מותאם. הזמנות דרך תפריט, נשלחות כ-PDF למייל ולוואטסאפ של הלקוח.",
        },
        stack: ["Next.js", "TypeScript", "Tailwind", "Server Actions", "PDF"],
        images: ["/projects/catering-ordering/cover.png"],
        video: {
            src: "/videos/shirat-hayam-demo.mp4", // TODO
            poster: "/videos/posters/shirat-hayam.jpg", // TODO
            provider: "file",
        },
        featured: true,
        createdAt: "2025-08-10",
        caseStudy: {
            overview: {
                en:
                    "Modern ordering UX tuned to client needs: no cart, structured menu flow, and automated PDF confirmation.",
                he:
                    "חוויית הזמנה מודרנית מותאמת לדרישת הלקוח: בלי עגלת קניות, זרימת תפריט מובנית וקבצי PDF אוטומטיים.",
            },
            problem: {
                en: "Client needed friction-free ordering without maintaining a cart state.",
                he: "הלקוח ביקש הזמנות ללא עגלה וללא מורכבות ניהול סטייט.",
            },
            solution: {
                en:
                    "Replaced cart with concise steps and generated PDF confirmations sent to email & WhatsApp.",
                he:
                    "הוחלף מנגנון העגלה בשלבים ממוקדים ונשלחים אישורי PDF למייל ולוואטסאפ.",
            },
            challenges: [
                {
                    en: "Reliable PDF generation and message delivery.",
                    he: "הפקת PDF יציבה ומשלוח הודעות אמין.",
                },
            ],
            results: {
                en: "Lower abandonment and faster order confirmation for staff.",
                he: "פחות נטישה ותהליך אישור מהיר יותר לצוות.",
            },
            highlights: ["PDF confirmations", "WhatsApp/email delivery", "Cart-less flow"],
        },
    },

    {
        slug: "rsvp-seating",
        title: { en: "RSVP & Seating Planner", he: "אישורי הגעה וסידורי הושבה" },
        summary: {
            en:
                "Invite guests with full details, send WhatsApp RSVPs, view live confirmations, and auto/drag-drop seating.",
            he:
                "הזנת אורחים עם כל הפרטים, שליחת אישורי הגעה בוואטסאפ, מעקב בזמן אמת וסידור הושבה אוטומטי או בגרירה.",
        },
        stack: ["Next.js", "TypeScript", "Drag & Drop", "WhatsApp API", "PDF"],
        repo: "https://github.com/EAosu/rsvp-seating",
        images: ["/projects/rsvp-seating/cover.png"],
        video: {
            src: "/videos/rsvp-seating-demo.mp4", // TODO
            poster: "/videos/posters/rsvp-seating.jpg", // TODO
            provider: "file",
        },
        featured: true,
        caseStudy: {
            overview: {
                en:
                    "End-to-end RSVP and seating tool with WhatsApp invitations and a flexible seating algorithm + manual drag.",
                he:
                    "כלי מקצה לקצה לאישורי הגעה והושבה עם הזמנות וואטסאפ ואלגוריתם הושבה גמיש + גרירה ידנית.",
            },
            problem: {
                en: "RSVP chaos and time-consuming manual seating for events.",
                he: "בלגן באישורי הגעה והושבה ידנית ארוכה לאירועים.",
            },
            solution: {
                en:
                    "Simple guest import, WhatsApp links, live status, auto-arrangement, and quick drag-and-drop overrides.",
                he:
                    "ייבוא אורחים קל, קישורי וואטסאפ, סטטוס בזמן אמת, הושבה אוטומטית וגרירה ידנית מהירה.",
            },
            challenges: [
                {
                    en: "Balancing algorithmic seating with family-group constraints and manual overrides.",
                    he: "איזון בין הושבה אוטומטית להגבלות משפחתיות ועריכה ידנית.",
                },
            ],
            results: {
                en: "Minutes-to-plan seating instead of hours; fewer invitation follow-ups.",
                he: "דקות לתכנון הושבה במקום שעות; פחות רדיפה אחרי מוזמנים.",
            },
            highlights: ["WhatsApp invites", "Auto + manual seating", "PDF exports"],
        },
    },


    // === OTHER PROJECTS (from CV / GitHub) ===
    {
        slug: "ai-mock-interviews",
        title: { en: "AI Mock Interviews", he: "ראיונות דמה עם AI" },
        summary: {
            en: "Simulates technical and behavioral interviews using OpenAI API and Vapi AI.",
            he: "סימולציות ריאיונות טכניים והתנהגותיים בעזרת OpenAI.",
        },
        stack: ["React", "Node.js", "Express", "OpenAI"],
        images: ["/projects/ai-mock-interviews/cover.png"],
        repo: "https://github.com/EAosu/ai_mock_interviews",
        video: { src: "/videos/ai-mock-interviews.mp4", poster: "/videos/posters/ai-mock.jpg" }, // TODO
        createdAt: "2025-01-01",
    },
    {
        slug: "ecommerce-movies",
        title: { en: "E-Commerce Movies Web App", he: "חנות סרטים - ווב" },
        summary: {
            en:
                "SPA frontend in React/JS, Spring backend, SQL Server for orders.",
            he:
                "SPA ב־React/JS, בקאנד ב־Spring, ו-SQL Server להזמנות.",
        },
        stack: ["React", "JavaScript", "Spring", "SQL Server"],
        images: ["/projects/movies-ecommerce/cover.png"],
        repo: "https://github.com/EAosu/e-commerce_movies_web",
        video: { src: "/videos/ecommerce-movies.mp4", poster: "/videos/posters/ecommerce.jpg" }, // TODO
        createdAt: "2024-01-15",
    },
    {
        slug: "bulls-and-cows-game",
        title: { en: "Bulls and Cows Web Game", he: "בולס אנד קאווז - משחק ווב" },
        summary: {
            en: "Classic logic game using React, Java servlets, and JS.",
            he: "משחק לוגיקה קלאסי ב-React, סרבלטס ו-JavaScript.",
        },
        stack: ["React", "Java", "Servlets", "HTML/CSS", "JavaScript"],
        images: ["/projects/bulls-and-cows/cover.png"],
        repo: "https://github.com/EAosu/bulls_and_cows_game",
        video: { src: "/videos/bulls-and-cows.mp4", poster: "/videos/posters/bnc.jpg" }, // TODO
        createdAt: "2023-09-01",
    },
    {
        slug: "rest-nasa-api-social",
        title: { en: "REST API Social (NASA)", he: "אפליקציה חברתית - NASA API" },
        summary: {
            en: "Social app integrating NASA’s REST API with a simple UI.",
            he: "אפליקציה חברתית שמשלבת את ה-REST API של NASA עם UI פשוט.",
        },
        stack: ["JavaScript", "REST", "HTML/CSS"],
        images: ["/projects/rest-nasa-api-social/cover.png"],
        repo: "https://github.com/EAosu/rest_nasa_api_social",
        video: { src: "/videos/rest-nasa.mp4", poster: "/videos/posters/nasa.jpg" }, // TODO
        createdAt: "2023-07-15",
    },
    {
        slug: "spring-games-reviews",
        title: { en: "Spring Games Reviews", he: "ביקורות משחקים - Spring" },
        summary: {
            en: "Spring backend + JS frontend with responsive UI.",
            he: "בקאנד Spring + פרונטנד JS עם UI רספונסיבי.",
        },
        stack: ["Spring", "Java", "JavaScript", "HTML/CSS"],
        repo: "https://github.com/EAosu/spring_games_reviews_web",
        images: ["/projects/spring-games-reviews/cover.png"],
        video: { src: "/videos/spring-games-reviews.mp4", poster: "/videos/posters/games.jpg" }, // TODO
        createdAt: "2023-05-10",
    },
];
