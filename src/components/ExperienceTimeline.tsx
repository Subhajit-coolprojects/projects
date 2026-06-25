import type { profile } from "@/data/profile";

type ExperienceItem = (typeof profile.experience)[number];

export function ExperienceTimeline({ items }: { items: readonly ExperienceItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <article className="relative rounded-lg border border-white/10 bg-[#0b111d]/70 p-5 md:p-6" key={item.company}>
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#63a7ff]">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.company}</h3>
              <p className="mt-1 text-sm text-slate-300">{item.role}</p>
            </div>
          </div>
          <ul className="mt-5 space-y-2">
            {item.bullets.map((bullet) => (
              <li className="flex gap-2.5 text-sm leading-6 text-slate-300" key={bullet}>
                <span className="mt-2.5 size-1 shrink-0 rounded-full bg-slate-500" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
