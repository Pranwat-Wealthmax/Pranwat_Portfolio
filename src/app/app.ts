import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { PortfolioStateService } from './services/portfolio-state';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroAvatarComponent } from './components/hero-avatar/hero-avatar';
import { AboutBentoComponent } from './components/about-bento/about-bento';
import { ExperienceTimelineComponent } from './components/experience-timeline/experience-timeline';
import { ProjectsShowcaseComponent } from './components/projects-showcase/projects-showcase';
import { SkillsMatrixComponent } from './components/skills-matrix/skills-matrix';
import { ContactSectionComponent } from './components/contact-section/contact-section';
import { ProjectModalComponent } from './components/project-modal/project-modal';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroAvatarComponent,
    AboutBentoComponent,
    ExperienceTimelineComponent,
    ProjectsShowcaseComponent,
    SkillsMatrixComponent,
    ContactSectionComponent,
    ProjectModalComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-grid-pattern min-h-screen relative selection:bg-cyan-500/30 selection:text-white">
      <!-- Ambient Cursor Spotlight -->
      <div
        class="cursor-spotlight hidden md:block"
        [style.left.px]="state.pointerX()"
        [style.top.px]="state.pointerY()"
      ></div>

      <!-- Fixed Ambient Mesh Orbs -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div class="ambient-glow-1 absolute -top-32 -left-32 w-[540px] h-[540px] rounded-full blur-3xl"></div>
        <div class="ambient-glow-2 absolute top-1/3 -right-40 w-[620px] h-[620px] rounded-full blur-3xl"></div>
        <div class="ambient-glow-1 absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-60"></div>
      </div>

      <app-navbar />

      <main class="relative z-10 pt-28 sm:pt-36 pb-20">
        <app-hero-avatar />

        <!-- Kinetic Tech Marquee Strip -->
        <div class="border-y border-white/[0.06] bg-white/[0.015] py-4 overflow-hidden mb-24">
          <div class="flex whitespace-nowrap animate-marquee font-mono text-xs sm:text-sm text-slate-400 tracking-wider uppercase">
            <div class="flex items-center gap-8 mx-4">
              <span>Angular & TypeScript</span> <span class="text-accent-primary">✦</span>
              <span>Tailwind CSS</span> <span class="text-accent-primary">✦</span>
              <span>Python & Flask</span> <span class="text-accent-primary">✦</span>
              <span>UI/UX Product Design</span> <span class="text-accent-primary">✦</span>
              <span>Network Deception & Security</span> <span class="text-accent-primary">✦</span>
              <span>SQLite3 Architecture</span> <span class="text-accent-primary">✦</span>
              <span>Git & GitHub Workflows</span> <span class="text-accent-primary">✦</span>
            </div>
            <div class="flex items-center gap-8 mx-4" aria-hidden="true">
              <span>Angular & TypeScript</span> <span class="text-accent-primary">✦</span>
              <span>Tailwind CSS</span> <span class="text-accent-primary">✦</span>
              <span>Python & Flask</span> <span class="text-accent-primary">✦</span>
              <span>UI/UX Product Design</span> <span class="text-accent-primary">✦</span>
              <span>Network Deception & Security</span> <span class="text-accent-primary">✦</span>
              <span>SQLite3 Architecture</span> <span class="text-accent-primary">✦</span>
              <span>Git & GitHub Workflows</span> <span class="text-accent-primary">✦</span>
            </div>
          </div>
        </div>

        <app-about-bento />
        <app-experience-timeline />
        <app-projects-showcase />
        <app-skills-matrix />
        <app-contact-section />
      </main>

      <!-- Footer -->
      <footer class="relative z-10 border-t border-white/[0.07] py-8 px-4 sm:px-6">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div class="flex items-center gap-2">
            <span class="font-bold text-white">Pranwat Singh Reen</span>
            <span>•</span>
            <span>B.Tech CSE '26 • Angular & UI/UX Developer</span>
          </div>
          <div class="font-mono">
            Built with Angular & Tailwind CSS • © 2026
          </div>
        </div>
      </footer>

      <app-project-modal />

      <!-- Toast Notification -->
      @if (state.toastMessage(); as toast) {
        <div class="fixed bottom-6 right-6 z-50 pointer-events-none">
          <div class="px-4 py-3 rounded-2xl bg-[#0d121c]/95 backdrop-blur-xl border border-cyan-400/30 shadow-2xl flex items-center gap-2.5 text-xs font-mono text-white">
            <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>{{ toast }}</span>
          </div>
        </div>
      }
    </div>
  `,
})
export class AppComponent {
  readonly state = inject(PortfolioStateService);

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.state.updatePointer(event.clientX, event.clientY);
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.state.selectedProject()) {
      this.state.selectedProject.set(null);
    }
  }
}
