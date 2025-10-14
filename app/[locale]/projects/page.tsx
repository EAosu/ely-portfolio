import { getMessages, Locale } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import Link from "next/link";

export default async function Projects({ params }: { params: { locale: Locale } }) {
  const t = await getMessages(params.locale);
  const isHe = params.locale === "he";

  return (
      <section className="py-16">
        <h1 className="text-4xl font-bold">{t.projects.title}</h1>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {projects.map(p => (
              <article key={p.slug} className="card hero-gradient">
                <h3 className="font-semibold text-lg">{isHe ? p.title.he : p.title.en}</h3>
                <p className="opacity-80 mt-2">{isHe ? p.summary.he : p.summary.en}</p>
                <div className="mt-3 text-sm opacity-80">{p.stack.join(" • ")}</div>
                <div className="mt-4 flex gap-3">
                  <Link href={`/${params.locale}/projects/${p.slug}`} className="btn btn-secondary">
                    {isHe ? "פרטים" : "Details"}
                  </Link>
                  {p.repo && <a className="btn btn-outline" href={p.repo} target="_blank" rel="noreferrer">GitHub</a>}
                  {p.demo && <a className="btn btn-outline" href={p.demo} target="_blank" rel="noreferrer">{isHe ? "דמו" : "Demo"}</a>}
                </div>
              </article>
          ))}
        </div>
        <p className="mt-8 opacity-70">{t.projects.soon}</p>
      </section>
  );
}
