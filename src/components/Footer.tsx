import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
        <p>(c) {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a className="transition hover:text-white" href="#top">
          Back to top
        </a>
      </div>
    </footer>
  );
}
