// app/[locale]/about/page.tsx
import { getMessages, Locale } from "@/lib/i18n";
import { skills } from "@/lib/skills";
import SkillCard from "@/components/skills/SkillCard";
import type {Metadata} from "next";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
    const isHe = params.locale === "he";
    return {
        title: isHe ? "עליי - איליי אסף" : "About Me - Ely Asaf",
        description: isHe ? "סיכום עצמי." : "Personal summary.",
        alternates: {
            canonical: `/${params.locale}/about`,
            languages: { en: "/en/about", he: "/he/about" },
        },
    };
}

export default async function About({ params }: { params: { locale: Locale } }) {
    const t = await getMessages(params.locale);
    const isHe = params.locale === "he";

    const groups = [
        { key: "Frontend", label: isHe ? "Frontend" : "Frontend" },
        { key: "Backend",  label: isHe ? "Backend"  : "Backend"  },
        { key: "Data",     label: isHe ? "Data"     : "Data"     },
        { key: "Tools",    label: isHe ? "Tools"    : "Tools"    },
    ] as const;

    return (
        <section className="py-16 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">
                {isHe ? "עליי" : "About Me"}
            </h1>

            <p className="text-lg opacity-90 leading-relaxed">
                {isHe ? (
                    <>אני איליי אסף, מפתח פולסטאק שמחבר בין UI נקי ל-Backend יעיל, עם אהבה למוצרים שבאמת מייצרים ערך. בימים אלו מעמיק ב-React, Next.js ו-Prisma, ובונה פרויקטים שמדגימים חשיבה מוצרית ותהליכי פיתוח נקיים.</>
                ) : (
                    <>I’m Ely Asaf, a Full-Stack developer who blends clean UI with efficient backends, focused on building products that create real value. Currently deepening React, Next.js and Prisma, showcasing product thinking and clean engineering through hands-on projects.</>
                )}
            </p>

            <hr className="my-10 border-black/30" />

            <h2 className="text-2xl font-semibold mb-2">
                {isHe ? "כישורים וכלים" : "Skills & Tools"}
            </h2>
            <p className="opacity-70 mb-6">
                {isHe ? "הטכנולוגיות שבהן אני עובד ביום-יום, עם דגש על איכות קוד ו-UX." : "Technologies I use day-to-day, with a focus on code quality and UX."}
            </p>

            <div className="space-y-10">
                {groups.map(g => {
                    const items = skills.filter(s => s.group === g.key);
                    if (!items.length) return null;
                    return (
                        <div key={g.key}>
                            <h3 className="text-lg font-semibold mb-4 opacity-90">{g.label}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {items.map(s => (
                                    <SkillCard key={s.name} name={s.name} icon={s.icon} color={s.color} rtl={isHe} />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
