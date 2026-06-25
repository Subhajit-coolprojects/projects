import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-4 pb-12 pt-36 sm:px-5 md:px-8 md:pb-16 md:pt-28"
    >
      <div className="hero-bg absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_0%,rgba(56,139,253,0.18),transparent_32%),linear-gradient(180deg,#07101d_0%,#070b12_48%,#05070b_100%)]" />
      <div className="mx-auto grid w-full max-w-6xl gap-7 lg:grid-cols-[1fr_330px] lg:items-end">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#63a7ff]">
            Personal CV Portfolio
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] text-white sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-7 text-slate-100 sm:text-xl md:text-2xl">
            {profile.title}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            {profile.intro}
          </p>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-row sm:flex-wrap">
            <a className="button button-primary" href={profile.cvPath}>
              Download CV
            </a>
            <a className="button button-secondary" href="#experience">
              Corporate Experience
            </a>
            <a className="button button-ghost" href="#personal-projects">
              Personal Projects
            </a>
            <a className="button button-ghost" href="#contact">
              Contact Me
            </a>
          </div>
          <dl className="mt-8 grid max-w-2xl overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] sm:grid-cols-3">
            <div className="border-b border-white/10 p-4 sm:border-b-0 sm:border-r">
              <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">Experience</dt>
              <dd className="mt-1 text-lg font-semibold text-white">{profile.experienceYears}</dd>
            </div>
            <div className="border-b border-white/10 p-4 sm:border-b-0 sm:border-r">
              <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">Cloud</dt>
              <dd className="mt-1 text-lg font-semibold text-white">Azure</dd>
            </div>
            <div className="p-4">
              <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">Base</dt>
              <dd className="mt-1 text-lg font-semibold text-white">Kolkata</dd>
            </div>
          </dl>
        </div>
        <aside className="rounded-lg border border-white/10 bg-[#0b111d]/80 p-5 shadow-2xl shadow-black/25">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Profile Snapshot</p>
          <dl className="mt-4 space-y-3">
            <div>
              <dt className="text-xs text-slate-500">Current direction</dt>
              <dd className="mt-1 text-base font-medium text-white">Microsoft cloud practice</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Core stack</dt>
              <dd className="mt-1 text-base font-medium text-white">Azure, DevOps, FinOps</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Availability</dt>
              <dd className="mt-1 text-base font-medium text-white">Cloud governance roles</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
