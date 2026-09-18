import Image from "next/image";
import { StarIcon } from "@/components/icons";
import type { SiteCopy } from "@/types";

export default function Testimonials({
  copy,
}: {
  copy: SiteCopy["testimonials"];
}) {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            {copy.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
            {copy.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {copy.items.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex h-full flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon
                      key={index}
                      className={`h-4 w-4 ${
                        index < testimonial.rating
                          ? "text-amber-500"
                          : "text-stone-200"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-stone-700">
                  “{testimonial.quote}”
                </blockquote>
              </div>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-stone-100 pt-5">
                <Image
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-stone-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-stone-500">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
