import type { Locale } from "@/types";

export function formatPrice(price: number, locale: Locale): string {
  const numberLocale = locale === "vi" ? "vi-VN" : "en-US";
  return `${new Intl.NumberFormat(numberLocale).format(price)}₫`;
}
