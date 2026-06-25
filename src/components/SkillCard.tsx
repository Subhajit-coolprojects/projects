import type { profile } from "@/data/profile";

type Skill = (typeof profile.skills)[number];

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <article className="rounded-lg border border-white/10 bg-[#0b111d]/70 p-5 transition hover:border-[#63a7ff]/50 hover:bg-white/[0.055]">
      <h3 className="text-base font-semibold text-white">{skill.title}</h3>
      <ul className="mt-4 grid gap-2">
        {skill.items.map((item) => (
          <li className="flex gap-2.5 text-sm leading-5 text-slate-300" key={item}>
            <span className="mt-2 size-1 shrink-0 rounded-full bg-[#63a7ff]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
