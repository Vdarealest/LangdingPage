import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ArrowRightIcon,
} from "@/components/icons";
import type { SiteCopy } from "@/types";

export default function Visit({ copy }: { copy: SiteCopy["visit"] }) {
  const telHref = `tel:${copy.contact.phone.replace(/\s/g, "")}`;

  return (
    <section id="visit" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 rounded-4xl border border-stone-200 bg-stone-50 p-8 sm:p-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              {copy.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-stone-900 sm:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-600">
              {copy.description}
            </p>

            <div className="mt-8 space-y-4">
              <p className="flex items-start gap-3 text-sm text-stone-700">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                {copy.contact.address}
              </p>
              <p className="flex items-center gap-3 text-sm text-stone-700">
                <PhoneIcon className="h-5 w-5 shrink-0 text-amber-700" />
                <a href={telHref} className="hover:text-amber-800">
                  {copy.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-3 text-sm text-stone-700">
                <MailIcon className="h-5 w-5 shrink-0 text-amber-700" />
                <a
                  href={`mailto:${copy.contact.email}`}
                  className="hover:text-amber-800"
                >
                  {copy.contact.email}
                </a>
              </p>
            </div>

            <a
              href={telHref}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-amber-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-800"
            >
              {copy.callToAction}
              <ArrowRightIcon className="h-4 w-4 shrink-0" />
            </a>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8">
            <h3 className="font-display text-xl font-semibold text-stone-900">
              {copy.hoursTitle}
            </h3>
            <dl className="mt-6 divide-y divide-stone-100">
              {copy.hours.map((hour) => (
                <div
                  key={hour.days}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <dt className="text-sm text-stone-600">{hour.days}</dt>
                  <dd className="text-sm font-semibold text-stone-900">
                    {hour.time}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 rounded-2xl bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-900">
              {copy.hoursNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
