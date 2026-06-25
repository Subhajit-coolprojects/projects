import type { profile } from "@/data/profile";

type Project = (typeof profile.personalProjects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex min-h-full flex-col rounded-lg border border-white/10 bg-[#0b111d]/70 p-4 transition hover:border-[#63a7ff]/50 hover:bg-white/[0.055] sm:p-5">
      <h3 className="text-base font-semibold leading-6 text-white sm:text-lg">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300" key={tech}>
            {tech}
          </span>
        ))}
      </div>
      <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-6 text-slate-400">
        <span className="font-medium text-slate-200">Impact:</span> {project.impact}
      </p>
    </article>
  );
}
