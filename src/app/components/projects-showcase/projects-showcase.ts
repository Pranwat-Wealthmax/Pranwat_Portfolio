import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ProjectItem } from '../../models/portfolio.models';
import { PortfolioStateService } from '../../services/portfolio-state';

@Component({
  selector: 'app-projects-showcase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="projects" class="max-w-6xl mx-auto px-4 sm:px-6 mb-28">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
        <div>
          <span class="font-mono text-xs uppercase tracking-[0.2em] text-accent-primary">03 // Selected Works</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mt-1">Featured Projects</h2>
        </div>

        <div class="flex flex-wrap gap-2">
          <button
            type="button"
            (click)="filter.set('all')"
            [class]="filter() === 'all' ? 'accent-gradient-bg text-slate-950 font-semibold' : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer"
          >
            All Projects
          </button>
          <button
            type="button"
            (click)="filter.set('security')"
            [class]="filter() === 'security' ? 'accent-gradient-bg text-slate-950 font-semibold' : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer"
          >
            Security & Backend
          </button>
          <button
            type="button"
            (click)="filter.set('uiux')"
            [class]="filter() === 'uiux' ? 'accent-gradient-bg text-slate-950 font-semibold' : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'"
            class="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer"
          >
            UI/UX & Web
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        @for (project of filteredProjects(); track project.key) {
          <article
            (click)="state.selectedProject.set(project)"
            class="bento-card rounded-3xl overflow-hidden flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div class="h-44 bg-gradient-to-br from-[#0c1322] via-[#10182b] to-[#1a1033] border-b border-white/10 p-5 relative overflow-hidden flex items-center justify-center">
                <div class="absolute inset-0 bg-grid-pattern opacity-40"></div>
                @if (project.key === 'honeypot') {
                  <div class="relative z-10 w-full max-w-[230px] rounded-xl bg-[#08090c]/90 border border-white/10 p-3 font-mono text-[10px] shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <div class="flex items-center justify-between text-slate-400 mb-2">
                      <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span> HONEYPOT LIVE</span>
                      <span class="text-accent-primary">PORT 22/80</span>
                    </div>
                    <div class="space-y-1 text-slate-300">
                      <div class="truncate text-rose-400">[ALERT] Probe 192.168.1.44</div>
                      <div class="truncate text-emerald-400">[LOGGED] SQLite3 Telemetry</div>
                      <div class="truncate text-slate-400">[TRAP] Decoy Shell Active</div>
                    </div>
                  </div>
                } @else if (project.key === 'uiuxSystem') {
                  <div class="relative z-10 w-full max-w-[230px] rounded-xl bg-[#08090c]/90 border border-white/10 p-3.5 shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <div class="flex items-center justify-between mb-2.5">
                      <span class="text-[10px] font-mono text-purple-300">DESIGN TOKENS</span>
                      <div class="flex gap-1">
                        <span class="w-3 h-3 rounded-full bg-cyan-400"></span>
                        <span class="w-3 h-3 rounded-full bg-purple-500"></span>
                        <span class="w-3 h-3 rounded-full bg-emerald-400"></span>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                      <div class="h-10 rounded-lg bg-white/5 border border-white/10 p-1.5">
                        <div class="w-8 h-1.5 rounded bg-slate-500 mb-1"></div>
                        <div class="w-12 h-2 rounded bg-accent-primary/60"></div>
                      </div>
                      <div class="h-10 rounded-lg bg-white/5 border border-white/10 p-1.5 flex items-center justify-center">
                        <span class="text-[10px] font-mono text-slate-300">Aa / 16px</span>
                      </div>
                    </div>
                  </div>
                } @else {
                  <div class="relative z-10 w-full max-w-[230px] rounded-xl bg-[#08090c]/90 border border-white/10 p-3 font-mono text-[10px] shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <div class="flex items-center justify-between text-slate-400 mb-2">
                      <span>git branch: main</span>
                      <span class="text-emerald-400">✓ 100/100</span>
                    </div>
                    <div class="space-y-1.5">
                      <div class="px-2 py-1 rounded bg-white/5 text-slate-300 flex justify-between">
                        <span>index.html</span><span class="text-sky-400">Semantic</span>
                      </div>
                      <div class="px-2 py-1 rounded bg-white/5 text-slate-300 flex justify-between">
                        <span>app.component.ts</span><span class="text-amber-300">Signals</span>
                      </div>
                    </div>
                  </div>
                }
              </div>

              <div class="p-6">
                <div class="flex items-center justify-between gap-2 mb-2">
                  <span class="text-[11px] font-mono uppercase tracking-wider text-accent-primary">{{ project.categoryLabel }}</span>
                  <span class="text-xs text-slate-400 group-hover:text-white transition-colors">Details ↗</span>
                </div>
                <h3 class="text-xl font-bold text-white group-hover:text-accent-primary transition-colors">
                  {{ project.title }}
                </h3>
                <p class="text-slate-400 text-sm mt-2.5 leading-relaxed">
                  {{ project.shortDesc }}
                </p>
              </div>
            </div>

            <div class="px-6 pb-6 pt-2 flex flex-wrap gap-2">
              @for (tag of project.tags.slice(0, 4); track tag) {
                <span class="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                  {{ tag }}
                </span>
              }
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class ProjectsShowcaseComponent {
  readonly state = inject(PortfolioStateService);
  readonly filter = signal<'all' | 'security' | 'uiux'>('all');

  readonly projects: ProjectItem[] = [
    {
      key: 'honeypot',
      category: 'security',
      categoryLabel: 'Security & Backend',
      badgeLabel: 'Security & Backend Engineering',
      title: 'Smart Honeypot Deception Server',
      shortDesc:
        'Network security deception server engineered to lure, log, and analyze unauthorized intrusion attempts with real-time threat telemetry and a live monitoring dashboard.',
      fullSummary:
        'A lightweight, intelligent network deception server built in Python and Flask that emulates vulnerable service endpoints to capture attacker payloads, fingerprint intrusion patterns, and visualize real-time telemetry.',
      highlights: [
        'Designed decoy login & service endpoints that log IP metadata, payload signatures, and timestamped session trails.',
        'Engineered persistent, structured event storage using SQLite3 with indexed query views for rapid threat inspection.',
        'Built a live Flask monitoring dashboard displaying attack frequency, top targeted routes, and severity classifications.',
      ],
      tags: ['Python', 'Flask', 'SQLite3', 'Network Security', 'Threat Telemetry'],
      githubUrl: 'https://github.com/Pranwat-Wealthmax',
    },
    {
      key: 'uiuxSystem',
      category: 'uiux',
      categoryLabel: 'UI/UX & Product',
      badgeLabel: 'UI/UX & Product Design',
      title: 'Interactive UI/UX Design System & Prototypes',
      shortDesc:
        'End-to-end mobile and web product interfaces crafted with scalable component libraries, semantic design tokens, accessibility contrast rules, and user research flows.',
      fullSummary:
        'A comprehensive design system and multi-screen interactive prototype suite bridging user research insights with developer-ready component specifications.',
      highlights: [
        'Established semantic color tokens, fluid typography scales, and 8pt spatial grid rules for dark and light interfaces.',
        'Conducted user journey mapping and low-to-high fidelity wireframing to eliminate onboarding friction.',
        'Delivered clickable micro-interaction prototypes with clear state variants for seamless engineering handoff.',
      ],
      tags: ['Design Systems', 'Design Tokens', 'Wireframing', 'Prototyping', 'User Research'],
      githubUrl: 'https://github.com/Pranwat-Wealthmax',
    },
    {
      key: 'webBoilerplate',
      category: 'uiux',
      categoryLabel: 'Frontend Architecture',
      badgeLabel: 'Frontend Architecture & DevOps',
      title: 'Modern Web & Git Workflow Boilerplates',
      shortDesc:
        'Responsive, high-performance front-end starter architectures featuring modular CSS structures, accessible DOM patterns, and standardized Git branching conventions.',
      fullSummary:
        'A collection of responsive, zero-bloat web starter templates paired with standardized Git branching, commit conventions, and clean semantic architecture.',
      highlights: [
        'Structured mobile-first responsive layouts with accessible ARIA landmarks and high Lighthouse performance scores.',
        'Modularized reactive state handlers and reusable CSS custom properties for rapid theme customization.',
        'Documented clean Git feature-branch workflows, pull request templates, and release tagging standards.',
      ],
      tags: ['Angular', 'Tailwind CSS', 'TypeScript', 'Git & GitHub', 'Responsive Web'],
      githubUrl: 'https://github.com/Pranwat-Wealthmax',
    },
  ];

  readonly filteredProjects = computed(() => {
    const active = this.filter();
    return active === 'all'
      ? this.projects
      : this.projects.filter((item) => item.category === active);
  });
}
