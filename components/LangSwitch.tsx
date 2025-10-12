
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function swapLocale(pathname: string, to: 'en' | 'he') {
  const parts = pathname.split('/').filter(Boolean);
  if (!parts.length) return `/${to}`;
  parts[0] = to;
  return '/' + parts.join('/');
}

export default function LangSwitch() {
  const pathname = usePathname();
  const toHe = swapLocale(pathname || "/en", "he");
  const toEn = swapLocale(pathname || "/en", "en");

  return (
    <div className="inline-flex gap-2">
      <Link href={toEn} className="btn text-sm">EN</Link>
      <Link href={toHe} className="btn text-sm">עב</Link>
    </div>
  );
}
