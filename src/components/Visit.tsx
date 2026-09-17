import { contactInfo, openingHours } from "@/data/mock";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ArrowRightIcon,
} from "@/components/icons";

export default function Visit() {
  return (
    <section id="visit" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 rounded-4xl border border-stone-200 bg-stone-50 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Ghé quán
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-stone-900 sm:text-4xl">
              Chúng tôi đang đợi bạn ở Quận 3
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-600">
              Ghé bất cứ lúc nào, hoặc gọi trước nếu bạn đi nhóm đông hơn 6
              người để chúng tôi sắp bàn cho vừa.
            </p>

            <div className="mt-8 space-y-4">
              <p className="flex items-start gap-3 text-sm text-stone-700">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                {contactInfo.address}
              </p>
              <p className="flex items-center gap-3 text-sm text-stone-700">
                <PhoneIcon className="h-5 w-5 shrink-0 text-amber-700" />
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-amber-800">
                  {contactInfo.phone}
                </a>
              </p>
              <p className="flex items-center gap-3 text-sm text-stone-700">
                <MailIcon className="h-5 w-5 shrink-0 text-amber-700" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-amber-800">
                  {contactInfo.email}
                </a>
              </p>
            </div>

            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-amber-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-800"
            >
              Gọi đặt bàn
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-8">
            <h3 className="font-display text-xl font-semibold text-stone-900">
              Giờ mở cửa
            </h3>
            <dl className="mt-6 divide-y divide-stone-100">
              {openingHours.map((hour) => (
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
              Bếp bánh ngừng nhận đơn trước giờ đóng cửa 45 phút.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
