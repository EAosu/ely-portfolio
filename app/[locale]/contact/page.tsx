import type { Metadata } from "next";
import { getMessages, Locale } from "@/lib/i18n";
import ContactForm from "@/components/ContactForm"; // זה יהיה קובץ קליינט נפרד

export async function generateMetadata(
    { params }: { params: { locale: Locale } }
): Promise<Metadata> {
    const isHe = params.locale === "he";
    return {
        title: isHe ? "צור קשר - איליי אסף" : "Contact - Ely Asaf",
        description: isHe
            ? "אשמח לשיתופי פעולה, הצעות עבודה או סתם שלום."
            : "Open to collaborations, job opportunities, or just saying hi.",
        alternates: {
            canonical: `/${params.locale}/contact`,
            languages: { en: "/en/contact", he: "/he/contact" },
        },
    };
}

export default async function ContactPage({ params }: { params: { locale: Locale } }) {
    const t = await getMessages(params.locale);
    const isHe = params.locale === "he";
    return <ContactForm t={t.contact} isHe={isHe} />;
}
