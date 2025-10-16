import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { Locale } from "@/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata(
    { params }: { params: { locale: Locale; slug: string } }
): Promise<Metadata> {
    const isHe = params.locale === "he";
    const p = projects.find(x => x.slug === params.slug);
    const title = p ? (isHe ? p.title.he : p.title.en) : (isHe ? "פרויקט" : "Project");
    const desc = p ? (isHe ? p.summary.he : p.summary.en) : (isHe ? "פרויקט מהפורטפוליו" : "Portfolio project");

    const url = `https://ely-portfolio.vercel.app/${params.locale}/projects/${params.slug}`;
    const ogImage = p?.images?.[0] ?? "/og.png";

    return {
        title: `${title} - ${isHe ? "איליי אסף" : "Ely Asaf"}`,
        description: desc,
        alternates: {
            canonical: `/${params.locale}/projects/${params.slug}`,
            languages: {
                en: `/en/projects/${params.slug}`,
                he: `/he/projects/${params.slug}`,
            },
        },
        openGraph: {
            title,
            description: desc,
            url,
            images: [{ url: ogImage }],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: desc,
            images: [ogImage],
        },
    };
}

export async function generateStaticParams() {
    const locales: Locale[] = ["en", "he"];
    return projects.flatMap(p => locales.map(locale => ({ locale, slug: p.slug })));
}

export default function ProjectPage({ params }: { params: { locale: Locale; slug: string } }) {
    const isHe = params.locale === "he";
    const p = projects.find(x => x.slug === params.slug);
    if (!p) return notFound();

    return (
        <section className="py-16">
            <h1 className="text-4xl font-extrabold">{isHe ? p.title.he : p.title.en}</h1>
            <p className="mt-3 opacity-80">{isHe ? p.summary.he : p.summary.en}</p>

            <div className="mt-4 text-sm opacity-70">{p.stack.join(" • ")}</div>

            {p.images?.length ? (
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                    {p.images.map((src, i) => (
                        <div key={i} className="overflow-hidden rounded-2xl border border-black/10">
                            <Image src={src} alt={`${p.slug}-${i}`} width={1200} height={800} />
                        </div>
                    ))}
                </div>
            ) : null}

            <div className="mt-8 flex gap-3">
                {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noreferrer">GitHub</a>}
                {p.demo && <a className="btn bg-brand-500 text-white hover:bg-brand-600" href={p.demo} target="_blank" rel="noreferrer">{isHe ? "דמו חי" : "Live Demo"}</a>}
            </div>
        </section>
    );
}
