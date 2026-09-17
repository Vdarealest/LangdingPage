import { highlights } from "@/data/mock";
import { HighlightIcon } from "@/components/icons";

export default function Highlights() {
  return (
    <section className="border-y border-stone-200 bg-stone-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Vì sao là Hạt Nâu
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
            Bốn điều chúng tôi không đánh đổi
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-amber-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                <HighlightIcon name={highlight.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-stone-900">
                {highlight.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
