import Image from "next/image";
import { galleryImages } from "@/data/mock";
import { cn } from "@/lib/cn";

export default function Gallery() {
  return (
    <section id="gallery" className="border-y border-stone-200 bg-stone-50 py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
          Không gian
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-stone-900 sm:text-4xl">
          Một buổi sáng ở Hạt Nâu
        </h2>
      </div>

      <div className="mt-14 grid auto-rows-40 grid-cols-2 gap-3 px-3 sm:auto-rows-50 lg:auto-rows-64 lg:grid-cols-4">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className={cn(
              "relative overflow-hidden rounded-2xl",
              index === 0 && "col-span-2 row-span-2"
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
