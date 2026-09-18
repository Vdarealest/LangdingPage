import type { SiteCopy } from "@/types";

export default function Stats({ stats }: { stats: SiteCopy["stats"] }) {
  return (
    <section className="bg-white pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 rounded-4xl bg-stone-900 px-8 py-12 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-stone-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
