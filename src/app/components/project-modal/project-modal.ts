import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioStateService } from '../../services/portfolio-state';

@Component({
  selector: 'app-project-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (state.selectedProject(); as proj) {
      <div
        (click)="state.selectedProject.set(null)"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      >
        <div
          (click)="$event.stopPropagation()"
          class="bento-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl relative"
        >
          <button
            type="button"
            (click)="state.selectedProject.set(null)"
            aria-label="Close Modal"
            class="absolute top-5 right-5 w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white cursor-pointer"
          >
            ✕
          </button>

          <div class="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-accent-primary mb-3">
            {{ proj.badgeLabel }}
          </div>
          <h3 class="text-2xl sm:text-3xl font-bold text-white">
            {{ proj.title }}
          </h3>
          <p class="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            {{ proj.fullSummary }}
          </p>

          <div class="mt-6 p-4 sm:p-5 rounded-2xl bg-[#08090c]/90 border border-white/10 space-y-3">
            <h4 class="font-mono text-xs uppercase tracking-wider text-accent-primary">Architecture & Design Breakdown</h4>
            <ul class="space-y-2 text-sm text-slate-300 list-disc pl-5">
              @for (item of proj.highlights; track item) {
                <li>{{ item }}</li>
              }
            </ul>
          </div>

          <div class="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div class="flex flex-wrap gap-2">
              @for (tag of proj.tags; track tag) {
                <span class="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                  {{ tag }}
                </span>
              }
            </div>
            <div class="flex items-center gap-2.5">
              <a
                [href]="proj.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-mono text-xs sm:text-sm transition-colors"
              >
                GitHub ↗
              </a>
              <button
                type="button"
                (click)="state.selectedProject.set(null)"
                class="px-5 py-2.5 rounded-xl accent-gradient-bg text-slate-950 font-semibold text-xs sm:text-sm cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    }
  `,
})
export class ProjectModalComponent {
  readonly state = inject(PortfolioStateService);
}
