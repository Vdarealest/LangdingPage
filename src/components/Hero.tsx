import Image from "next/image";
import { heroBadge, heroImage, stats } from "@/data/mock";
import { ArrowRightIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-950">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-104 w-104 rounded-full bg-amber-700/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 bottom-0 h-96 w-96 rounded-full bg-amber-900/25 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_46%] lg:gap-0 lg:py-28">
          <div className="relative z-10 lg:pr-16">
            <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-medium text-amber-200">
              {heroBadge}
            </span>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Cà phê rang mộc,
              <br />
              pha bằng cả sự tử tế
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300">
              Mỗi mẻ hạt được rang trong ngày, pha bởi những barista nhớ tên
              bạn. Một chỗ ngồi yên tĩnh giữa Quận 3 để bắt đầu buổi sáng cho
              tử tế.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-500"
              >
                Xem thực đơn
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="#visit"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Đặt bàn trước
              </a>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-6">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.id}>
                  <dt className="font-display text-2xl font-semibold text-white">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-stone-400">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative aspect-4/5 overflow-hidden rounded-4xl border border-white/10 lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[46%] lg:rounded-none lg:rounded-l-[3rem] lg:border-0">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 hidden w-40 bg-linear-to-r from-stone-950 via-stone-950/50 to-transparent lg:block"
            />

            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur">
              <p className="font-display text-lg font-semibold text-stone-900">
                Mở cửa 07:00
              </p>
              <p className="mt-0.5 text-xs text-stone-500">
                Mẻ rang đầu tiên vừa ra lò
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
