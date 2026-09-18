export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden bg-amber-700 py-4">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1} className="flex shrink-0">
            {items.map((item) => (
              <span
                key={item}
                className="flex items-center whitespace-nowrap px-8 font-display text-lg text-amber-50"
              >
                {item}
                <span className="ml-8 h-1.5 w-1.5 rounded-full bg-amber-300" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
