import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { SkillCard } from "@/components/SkillCard";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Section id="about" eyebrow="About" title="Cloud, reliability, and automation with practical business focus.">
          <p className="max-w-4xl text-base leading-7 text-slate-300">
            {profile.summary}
          </p>
        </Section>

        <Section id="highlights" eyebrow="Highlights" title="Career highlights across cloud, governance, and enterprise operations.">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {profile.careerHighlights.map((highlight) => (
              <article className="rounded-lg border border-white/10 bg-[#0b111d]/70 p-5" key={highlight.title}>
                <h3 className="text-base font-semibold text-white">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{highlight.summary}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="Focused capabilities across modern cloud operations.">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {profile.skills.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Corporate Experience" title="Enterprise roles across PwC, LTIMindtree, Azure operations, and endpoint leadership.">
          <ExperienceTimeline items={profile.experience} />
        </Section>

        <Section id="personal-projects" eyebrow="Personal Projects" title="Selected personal builds and practical Azure automation use cases.">
          <div className="grid gap-3 md:grid-cols-2">
            {profile.personalProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="certifications" eyebrow="Certifications" title="Microsoft cloud and security credentials.">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {profile.certifications.map((certification) => (
              <li
                className="rounded-lg border border-white/10 bg-[#0b111d]/70 px-4 py-3 text-sm text-slate-200"
                key={certification}
              >
                {certification}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="education" eyebrow="Education" title="Academic background.">
          <div className="grid gap-3">
            {profile.education.map((education) => (
              <article className="grid gap-3 rounded-lg border border-white/10 bg-[#0b111d]/70 p-5 md:grid-cols-3 md:items-center" key={education.degree}>
                <h3 className="text-lg font-semibold text-white">{education.degree}</h3>
                <p className="text-sm text-slate-300 md:text-center">{education.institution}</p>
                <p className="text-sm text-slate-400 md:text-right">{education.result}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Open to relevant cloud, DevOps, and technical leadership conversations.">
          <div className="grid gap-3 md:grid-cols-2">
            <a className="contact-link" href={`mailto:${profile.email}`}>
              <span>Email</span>
              <strong>{profile.email}</strong>
            </a>
            <a className="contact-link" href={profile.linkedin} rel="noreferrer" target="_blank">
              <span>LinkedIn</span>
              <strong>linkedin.com/in/subhajit-banik</strong>
            </a>
            <a className="contact-link" href={profile.github} rel="noreferrer" target="_blank">
              <span>GitHub</span>
              <strong>github.com/Subhajit-coolprojects/projects</strong>
            </a>
            <a className="contact-link" href={`tel:${profile.phone}`}>
              <span>Phone</span>
              <strong>{profile.phone}</strong>
            </a>
            <div className="contact-link" aria-label="Location">
              <span>Location</span>
              <strong>{profile.location}</strong>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
