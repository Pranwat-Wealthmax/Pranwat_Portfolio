import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ExperienceItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-experience-timeline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="experience" class="max-w-6xl mx-auto px-4 sm:px-6 mb-28">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span class="font-mono text-xs uppercase tracking-[0.2em] text-accent-primary">02 // Career Path</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mt-1">Experience Timeline</h2>
        </div>

        <div class="inline-flex p-1 rounded-xl bg-white/5 border border-white/10 self-start">
          <button
            type="button"
            (click)="filter.set('all')"
            [class]="filter() === 'all' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'"
            class="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer"
          >
            All Roles
          </button>
          <button
            type="button"
            (click)="filter.set('management')"
            [class]="filter() === 'management' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'"
            class="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer"
          >
            Management
          </button>
          <button
            type="button"
            (click)="filter.set('tech')"
            [class]="filter() === 'tech' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'"
            class="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer"
          >
            IT & Systems
          </button>
        </div>
      </div>

      <div class="relative pl-6 sm:pl-10 border-l border-white/15 space-y-8">
        @for (exp of filteredExperiences(); track exp.id) {
          <div class="relative">
            <span
              [class]="exp.isCurrent ? 'accent-gradient-bg' : 'bg-slate-600'"
              class="absolute -left-[31px] sm:-left-[47px] top-6 w-3.5 h-3.5 rounded-full ring-4 ring-[#08090c]"
            ></span>
            <div class="bento-card rounded-3xl p-6 sm:p-8">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div class="flex items-center gap-2.5 flex-wrap">
                    <h3 class="text-xl sm:text-2xl font-bold text-white">{{ exp.role }}</h3>
                    <span
                      [class]="exp.isCurrent ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' : 'bg-white/5 text-slate-300 border-white/10'"
                      class="px-2.5 py-0.5 rounded-full text-[11px] font-mono border"
                    >
                      {{ exp.organization }}
                    </span>
                  </div>
                  <p [class]="exp.isCurrent ? 'text-accent-primary' : 'text-slate-300'" class="text-sm font-medium mt-1">
                    {{ exp.subtitle }}
                  </p>
                </div>
                <span class="font-mono text-xs text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 self-start">
                  {{ exp.period }}
                </span>
              </div>

              <p class="text-slate-400 text-sm sm:text-base leading-relaxed mb-5">
                {{ exp.description }}
              </p>

              <div class="flex flex-wrap gap-2">
                @for (tag of exp.tags; track tag) {
                  <span class="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
                    {{ tag }}
                  </span>
                }
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
})
export class ExperienceTimelineComponent {
  readonly filter = signal<'all' | 'management' | 'tech'>('all');

  readonly experiences: ExperienceItem[] = [
    {
      id: 'mgmt-trainee',
      role: 'Management Trainee',
      organization: 'Current',
      subtitle: 'Learning, Strategy & Task Assessments',
      period: '2026 — Present',
      category: 'management',
      isCurrent: true,
      description:
        'Driving structured problem-solving, cross-functional operational workflows, and strategic task evaluations. Translating technical insights into actionable business execution while mastering agile project coordination.',
      tags: ['Strategic Planning', 'Task Assessments', 'Operational Execution', 'Process Optimization'],
    },
    {
      id: 'rvs-intern',
      role: 'IT Intern',
      organization: 'RVS iGlobal',
      subtitle: 'IT Infrastructure, Web Systems & Technical Operations • Jammu',
      period: 'Feb 2026 – June 2026',
      category: 'tech',
      isCurrent: false,
      description:
        'Supported enterprise IT infrastructure, maintained internal web systems, and streamlined day-to-day technical operations. Collaborated on diagnosing system bottlenecks, ensuring high uptime, and enhancing web asset performance.',
      tags: ['IT Infrastructure', 'Web Systems', 'Technical Operations', 'System Diagnostics'],
    },
  ];

  readonly filteredExperiences = computed(() => {
    const active = this.filter();
    return active === 'all'
      ? this.experiences
      : this.experiences.filter((item) => item.category === active);
  });
}
