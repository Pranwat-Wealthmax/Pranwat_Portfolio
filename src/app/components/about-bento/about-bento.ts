import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-bento',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" class="max-w-6xl mx-auto px-4 sm:px-6 mb-28">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span class="font-mono text-xs uppercase tracking-[0.2em] text-accent-primary">01 // Overview</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mt-1">About & Highlights</h2>
        </div>
        <p class="text-slate-400 text-sm max-w-md">
          Combining structured computer science fundamentals, visual design thinking, and operational management.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div class="bento-card md:col-span-7 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-accent-primary mb-5">
              <span>Engineering × Design</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-3">
              Building software that feels effortless and runs reliably.
            </h3>
            <p class="text-slate-400 text-sm sm:text-base leading-relaxed">
              I approach problems from both sides of the screen—architecting clean Python/Flask backends and security telemetry tools while ensuring every interface is backed by thoughtful wireframing, user research, and modern design systems. My Management Trainee experience adds structured execution, stakeholder clarity, and strategic assessment to every project.
            </p>
          </div>
          <div class="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
            <span class="px-3 py-1 rounded-lg bg-white/[0.04] text-xs text-slate-300 border border-white/5">User-First Thinking</span>
            <span class="px-3 py-1 rounded-lg bg-white/[0.04] text-xs text-slate-300 border border-white/5">Clean System Architecture</span>
            <span class="px-3 py-1 rounded-lg bg-white/[0.04] text-xs text-slate-300 border border-white/5">Agile Collaboration</span>
          </div>
        </div>

        <div class="bento-card md:col-span-5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div class="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-primary mb-5">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <span class="font-mono text-xs text-slate-400">EDUCATION</span>
            <h3 class="text-xl font-bold text-white mt-1">
              B.Tech in Computer Science & Engineering
            </h3>
            <p class="text-slate-300 text-sm font-medium mt-2">
              Mahant Bachittar Singh College of Engineering & Technology (MBSCET)
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <span class="text-slate-400">Jammu, J&K</span>
            <span class="px-2.5 py-1 rounded-md bg-white/5 text-accent-primary border border-white/10">Class of 2026</span>
          </div>
        </div>

        <div class="bento-card md:col-span-6 rounded-3xl p-6 sm:p-8">
          <div class="flex items-center justify-between mb-5">
            <span class="font-mono text-xs uppercase tracking-wider text-accent-primary">Credentials & Community</span>
          </div>
          <div class="space-y-4">
            <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <h4 class="font-semibold text-white text-sm">UI/UX Design Certified</h4>
              <p class="text-xs text-slate-400 mt-0.5">Internshala Trainings • End-to-end wireframing, visual hierarchy, design tokens & interactive prototyping.</p>
            </div>
            <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <h4 class="font-semibold text-white text-sm">Google Developer Group (GDG) Jammu Member</h4>
              <p class="text-xs text-slate-400 mt-0.5">Active regional developer community participant exploring modern web, cloud, and product engineering.</p>
            </div>
          </div>
        </div>

        <div class="bento-card md:col-span-6 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <span class="font-mono text-xs uppercase tracking-wider text-accent-primary">Quick Facts & Focus</span>
            <h3 class="text-xl font-bold text-white mt-1 mb-5">At a Glance</h3>
            <div class="grid grid-cols-2 gap-3.5">
              <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div class="text-xs font-mono text-slate-400">PRIMARY STACK</div>
                <div class="text-sm font-semibold text-white mt-1">Python, Flask & Web</div>
              </div>
              <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div class="text-xs font-mono text-slate-400">DESIGN SUITE</div>
                <div class="text-sm font-semibold text-white mt-1">UI/UX & Design Systems</div>
              </div>
              <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div class="text-xs font-mono text-slate-400">CURRENT TRACK</div>
                <div class="text-sm font-semibold text-white mt-1">Management & Ops</div>
              </div>
              <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div class="text-xs font-mono text-slate-400">BASE LOCATION</div>
                <div class="text-sm font-semibold text-white mt-1">Jammu, India</div>
              </div>
            </div>
          </div>
          <div class="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>Available for Product, Frontend & UI/UX roles</span>
            <span class="text-accent-primary font-mono">● Ready</span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutBentoComponent {}
