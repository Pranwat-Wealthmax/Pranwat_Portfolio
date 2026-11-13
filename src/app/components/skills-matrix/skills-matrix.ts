import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SkillGroup } from '../../models/portfolio.models';

@Component({
  selector: 'app-skills-matrix',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="skills" class="max-w-6xl mx-auto px-4 sm:px-6 mb-28">
      <div class="mb-10">
        <span class="font-mono text-xs uppercase tracking-[0.2em] text-accent-primary">04 // Capabilities</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-white mt-1">Tech Stack & Skills Matrix</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        @for (group of skillGroups; track group.title) {
          <div class="bento-card rounded-3xl p-6 sm:p-7">
            <h3 class="font-bold text-lg text-white mb-1">{{ group.title }}</h3>
            <p class="text-xs text-slate-400 mb-5">{{ group.subtitle }}</p>
            <div class="flex flex-wrap gap-2.5">
              @for (skill of group.skills; track skill) {
                <span class="px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-sm text-slate-200 font-medium transition-all">
                  {{ skill }}
                </span>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
})
export class SkillsMatrixComponent {
  readonly skillGroups: SkillGroup[] = [
    {
      title: 'Languages & Web',
      subtitle: 'Core programming & client layer',
      skills: ['Python', 'TypeScript', 'HTML5', 'CSS3 / Tailwind'],
    },
    {
      title: 'Frameworks & DB',
      subtitle: 'Frontend SPA, backend APIs & storage',
      skills: ['Angular', 'Flask', 'SQLite3', 'Security Telemetry'],
    },
    {
      title: 'Design & Tools',
      subtitle: 'Product UX & version control',
      skills: ['UI/UX Prototyping', 'Wireframing', 'Design Systems', 'Git & GitHub'],
    },
  ];
}
