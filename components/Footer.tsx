
import { Locale } from "@/lib/i18n";

export default function Footer({ t, locale }: { t: any; locale: Locale }) {
  return (
    <footer className="mt-16 border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-black/60 dark:text-white/60">
        <p>{t.footer.madeby}</p>
      </div>
    </footer>
  );
}
