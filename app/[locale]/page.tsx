
import Link from "next/link";
import { getMessages, Locale } from "@/lib/i18n";

export default async function Home({ params }: { params: { locale: Locale } }) {
  const t = await getMessages(params.locale);

  return (
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
        <article className="card">
          <h3 className="font-semibold text-lg">Invoice Manager 2.0</h3>
          <p className="opacity-80 mt-2">Smart invoice/receipt classifier with AI, dashboard, and Google OAuth.</p>
        </article>
        <article className="card sub-gradient">
          <h3 className="font-semibold text-lg">Shirat‑Hayam Ordering</h3>
          <p className="opacity-80 mt-2">Modern ordering flow with cart, responsive design, and admin controls.</p>
        </article>
      </div>
    </section>
  );
}
