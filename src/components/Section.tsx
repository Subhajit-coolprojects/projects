import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  eyebrow: string;
  id: string;
  title: string;
};

export function Section({ children, eyebrow, id, title }: SectionProps) {
  return (
    <section className="px-5 py-12 md:px-8 md:py-16" id={id}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 grid gap-4 md:grid-cols-[220px_1fr] md:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#63a7ff]">
            {eyebrow}
          </p>
          <h2 className="max-w-3xl text-2xl font-semibold leading-tight text-white md:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
