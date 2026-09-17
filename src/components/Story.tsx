import Image from "next/image";
import { storyImage, storyParagraphs } from "@/data/mock";

export default function Story() {
  return (
    <section id="story" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-4xl border border-stone-200">
          <Image
            src={storyImage.src}
            alt={storyImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Câu chuyện
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-stone-900 sm:text-4xl">
            Bắt đầu từ một máy rang 3kg trong gara
          </h2>

          <div className="mt-6 space-y-5">
            {storyParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base leading-relaxed text-stone-600"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <figure className="mt-8 border-l-2 border-amber-300 pl-5">
            <blockquote className="font-display text-lg italic text-stone-800">
              “Chúng tôi không bán cà phê ngon nhất thành phố. Chúng tôi bán ly
              cà phê mà mình sẵn sàng uống mỗi ngày.”
            </blockquote>
            <figcaption className="mt-2 text-sm text-stone-500">
              Anh Duy — người sáng lập
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
