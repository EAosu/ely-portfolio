
import { getMessages, Locale } from "@/lib/i18n";

export default async function About({ params }: { params: { locale: Locale } }) {
  const t = await getMessages(params.locale);

  return (
    <section className="py-16 prose prose-neutral max-w-none dark:prose-invert">
      <h1>{t.about.title}</h1>
      <p>{t.about.body}</p>
      <ul>
        <li>React / Next.js / TypeScript</li>
        <li>Node.js / Express / Prisma / PostgreSQL</li>
        <li>Tailwind / UI animations</li>
      </ul>
    </section>
  );
}
