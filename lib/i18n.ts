
export type Locale = 'en' | 'he';

export function isRTL(locale: Locale) {
  return locale === 'he';
}

export async function getMessages(locale: Locale) {
  const dict = await import(`../messages/${locale}.json`);
  return dict.default;
}
