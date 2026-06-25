"use client";

import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b12]/80 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-8"
      >
        <a className="rounded-md border border-white/10 px-2 py-1 text-sm font-semibold tracking-wide text-white" href="#top" aria-label="Go to top">
          SB
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {profile.navItems.map((item) => (
            <a className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a className="button button-secondary hidden md:inline-flex" href={profile.cvPath}>
            Download CV
          </a>
        </div>
      </nav>
      <div className="border-t border-white/10 px-4 pb-3 md:hidden">
        <div className="mobile-nav-scroll flex gap-2 overflow-x-auto pt-3" aria-label="Mobile navigation">
          {profile.navItems.map((item) => (
            <a className="mobile-nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
