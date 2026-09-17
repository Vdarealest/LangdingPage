import { brand, footerLinkGroups, socialLinks } from "@/data/mock";
import { SocialIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-700 font-display text-lg text-white">
                H
              </span>
              <span className="font-display text-xl font-semibold text-stone-900">
                {brand.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-600">
              {brand.tagline}. Rang thủ công từng mẻ nhỏ tại Quận 3, TP.HCM.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-stone-500 transition hover:text-amber-800"
                >
                  <SocialIcon name={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-stone-900">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-stone-600 transition hover:text-amber-800"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-stone-200 pt-8 text-center text-sm text-stone-500">
          © {new Date().getFullYear()} {brand.name}. Bảo lưu mọi quyền.
        </div>
      </div>
    </footer>
  );
}
