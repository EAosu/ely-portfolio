
import Link from "next/link";
import LangSwitch from "./LangSwitch";
import { Locale } from "@/lib/i18n";

export default function NavBar({ t, locale }: { t: any; locale: Locale }) {
  const base = `/${locale}`;
  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href={base} className="font-bold text-lg ml-3">Ely.dev</Link>
        <div className="flex items-center gap-6">
          <Link href={base} className="hover:underline">{t.nav.home}</Link>
          <Link href={`${base}/projects`} className="hover:underline">{t.nav.projects}</Link>
          <Link href={`${base}/about`} className="hover:underline">{t.nav.about}</Link>
          <LangSwitch />
        </div>
      </nav>
    </header>
  );
}
