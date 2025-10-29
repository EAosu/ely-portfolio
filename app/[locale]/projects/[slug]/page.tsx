import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { projects } from "@/lib/projects";
import { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import VideoPlayer from "@/components/VideoPlayer";

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
    if (!p) return null;

    return (
        <section className="py-12">
            <h1 className="text-3xl font-bold">{isHe ? p.title.he : p.title.en}</h1>
            <p className="mt-2 opacity-80 font-semibold">{isHe ? p.summary.he : p.summary.en}</p>

            {p.video ? (
                <div className="mt-6">
                    <VideoPlayer
                        src={p.video.src}
                        provider={p.video.provider}
                        className="w-full aspect-video rounded-2xl shadow"
                    />
                </div>
            ) : p.images?.length ? (
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {p.images.map(src => (
                        <img key={src} src={src} alt="" className="rounded-xl border border-white/10" />
                    ))}
                </div>
            ) : null}

            {p.caseStudy && (
                <div className="mt-10">
                    <ProjectCaseStudy cs={p.caseStudy} isHe={isHe} />
                </div>
            )}
        </section>
    );
}
