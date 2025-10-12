
import { getMessages, Locale } from "@/lib/i18n";

export default async function Projects({ params }: { params: { locale: Locale } }) {
  const t = await getMessages(params.locale);

  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold">{t.projects.title}</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <article className="card">
          <h3 className="font-semibold text-lg">Invoice Manager 2.0</h3>
          <ul className="mt-2 list-disc pl-5 space-y-1 opacity-80">
            <li>Next.js App Router, API routes</li>
            <li>Prisma + PostgreSQL</li>
            <li>Google OAuth</li>
            <li>AI‑assisted document parsing</li>
          </ul>
        </article>
        <article className="card">
          <h3 className="font-semibold text-lg">Shirat‑Hayam Ordering</h3>
          <ul className="mt-2 list-disc pl-5 space-y-1 opacity-80">
            <li>Responsive cart + checkout UX</li>
            <li>Admin management</li>
            <li>Stripe‑ready structure</li>
          </ul>
        </article>
      </div>
      <p className="mt-8 opacity-70">{t.projects.soon}</p>
    </section>
  );
}
