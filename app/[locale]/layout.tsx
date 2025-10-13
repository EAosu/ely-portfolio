
import "../globals.css";
import { isRTL, getMessages, Locale } from "@/lib/i18n";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'he' }];
}

export const metadata = {
  title: "Ely Asaf — Full-Stack Portfolio",
  description: "Bilingual (EN/HE) portfolio. React, Node.js, Prisma, Tailwind.",
  openGraph: {
    title: "Ely Asaf — Full-Stack Portfolio",
    description: "Projects, case studies, and live demos.",
    url: "https://ely-portfolio.vercel.app",
    siteName: "Ely Asaf",
    images: [{ url: "/og.png" }],
    locale: "en_US",
    type: "website"
  },
  icons: { icon: "/favicon.ico" }
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { locale: Locale }
}) {
  const locale = params.locale ?? 'en';
  const t = await getMessages(locale);
  const dir = isRTL(locale) ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className="min-h-dvh bg-radial bg-fixed antialiased text-black/90 dark:text-white/90">
        <NavBar t={t} locale={locale} />
        <main className="mx-auto max-w-6xl px-4">
          {children}
        </main>
        <Footer t={t} locale={locale} />
      </body>
    </html>
  );
}
