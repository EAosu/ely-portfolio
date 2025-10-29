import { projects } from "@/lib/projects";
import Link from "next/link";
import { getMessages, Locale } from "@/lib/i18n";
import Script from "next/script";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const isHe = params.locale === "he";
  return {
    title: isHe ? "איליי אסף - מפתח פולסטאק" : "Ely Asaf - Full-Stack Developer",
    description: isHe
        ? "פורטפוליו דו-לשוני (EN/HE). React, Next.js, Node.js, Prisma, Tailwind."
        : "Bilingual portfolio (EN/HE). React, Next.js, Node.js, Prisma, Tailwind.",
    alternates: {
      canonical: `/${params.locale}`,
      languages: { en: "/en", he: "/he" },
    },
  };
}

export default async function Home({ params }: { params: { locale: Locale } }) {
  const t = await getMessages(params.locale);
  const isHe = params.locale === "he";
  const featured = projects.filter(p => p.featured).slice(0, 4);
  const list = featured.length ? featured : projects.slice(0, 2);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ely Asaf",
    "jobTitle": "Software Developer",
    "url": "https://ely-portfolio.vercel.app",
    "image": "https://ely-portfolio.vercel.app/og.png",
    "sameAs": [
      "https://github.com/EAosu",
      "https://www.linkedin.com/in/ely-asaf"
    ],
    "knowsAbout": [
      "React", "Next.js", "Node.js", "TypeScript",
      "Prisma", "PostgreSQL", "Tailwind CSS"
    ]
  };

  return (
      <>
        <Script
            id="jsonld-person"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="py-16">
          <div className="rounded-3xl hero-gradient p-10 md:p-16 card">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{t.hero.title}</h1>
            <p className="mt-4 text-lg md:text-xl opacity-80">{t.hero.subtitle}</p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link href={`/${params.locale}/projects`} className="btn btn-primary">{t.hero.cta_primary}</Link>
              <a href="/ely_cv.pdf" className="btn btn-primary" target="_blank" rel="noopener">{t.hero.cta_secondary}</a>
            </div>

            <p className="mt-10 text-base opacity-80">{t.home.tagline}</p>
          </div>

          <h2 className="mt-14 text-2xl font-semibold">{t.home.featured}</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {list.map(p => (
                <article key={p.slug} className="card sub-gradient">
                  <h3 className="font-semibold text-lg">
                    {isHe ? p.title.he : p.title.en}
                  </h3>
                  <p className="opacity-80 mt-2">
                    {isHe ? p.summary.he : p.summary.en}
                  </p>
                  <div className="mt-3 text-sm opacity-70">{p.stack.join(" • ")}</div>

                  <div className="mt-4">
                    {(() => {
                      const displayImage = p.images?.[0] ?? p.video?.poster;
                      return displayImage ? (
                          <img
                              src={displayImage}
                              alt={isHe ? p.title.he : p.title.en}
                              className="w-full rounded-2xl shadow"
                              loading="lazy"
                          />
                      ) : null;
                    })()}
                  </div>

                  <div className="mt-4 flex gap-3 flex-wrap">
                    <Link
                        href={`/${params.locale}/projects/${p.slug}`}
                        className="btn btn-primary btn-sm"
                    >
                      {isHe ? "פרטים" : "Details"}
                    </Link>
                    {p.repo && (
                        <a className="btn btn-ghost btn-sm" href={p.repo} target="_blank" rel="noreferrer">
                          GitHub
                        </a>
                    )}
                    {p.demo && (
                        <a className="btn btn-outline btn-sm" href={p.demo} target="_blank" rel="noreferrer">
                          {isHe ? "דמו" : "Demo"}
                        </a>
                    )}
                  </div>
                </article>
            ))}
          </div>
        </section>
      </>
  );
}
