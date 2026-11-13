import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
// Note: If your service file is named portfolio-state.service.ts, add '.service' to the path below:
import { PortfolioStateService } from '../../services/portfolio-state';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav
        class="max-w-6xl mx-auto rounded-2xl glass-panel px-4 sm:px-6 py-3 flex items-center justify-between shadow-lg"
      >
        <!-- Brand Logo -->
        <a href="#hero" class="flex items-center gap-2.5 group">
          <span
            class="w-2.5 h-2.5 rounded-full transition-all"
            [style.background-color]="
              state.themeMode() === 'cyber' ? '#06b6d4' : '#10b981'
            "
            [style.box-shadow]="
              state.themeMode() === 'cyber'
                ? '0 0 10px #06b6d4'
                : '0 0 10px #10b981'
            "
          ></span>
          <span
            class="font-display font-bold tracking-wider text-sm sm:text-base text-white group-hover:text-cyan-300 transition"
          >
            PRANWAT<span class="text-cyan-400">.DEV</span>
          </span>
        </a>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center gap-7 text-sm text-slate-300">
          <a href="#about" class="hover:text-white transition">About</a>
          <a href="#experience" class="hover:text-white transition">Experience</a>
          <a href="#projects" class="hover:text-white transition">Projects</a>
          <a href="#skills" class="hover:text-white transition">Skills</a>
        </div>

        <!-- Right Controls: Theme Toggle + CTA + Mobile Menu -->
        <div class="flex items-center gap-2.5">
          <!-- Cyber Cyan / Emerald Amber Switcher -->
          <button
            type="button"
            (click)="state.toggleTheme()"
            aria-label="Toggle color theme"
            class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-xs font-mono text-slate-200 transition cursor-pointer"
          >
            <span
              class="w-2.5 h-2.5 rounded-full transition-colors"
              [style.background-color]="
                state.themeMode() === 'cyber' ? '#06b6d4' : '#f59e0b'
              "
              [style.box-shadow]="
                state.themeMode() === 'cyber'
                  ? '0 0 8px #06b6d4'
                  : '0 0 8px #f59e0b'
              "
            ></span>
            <span class="hidden sm:inline">
              {{ state.themeMode() === 'cyber' ? 'Cyber Cyan' : 'Emerald Amber' }}
            </span>
          </button>

          <a
            href="#contact"
            class="hidden sm:inline-flex btn-primary px-4 py-1.5 rounded-xl text-xs font-semibold"
          >
            Contact
          </a>

          <!-- Mobile Hamburger Button -->
          <button
            type="button"
            (click)="mobileMenuOpen.set(!mobileMenuOpen())"
            aria-label="Toggle Menu"
            class="md:hidden p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 cursor-pointer"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              @if (mobileMenuOpen()) {
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              } @else {
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              }
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Dropdown Menu -->
      @if (mobileMenuOpen()) {
        <div
          class="md:hidden max-w-6xl mx-auto mt-2 rounded-2xl glass-panel p-4 flex flex-col gap-3 text-sm text-slate-200 shadow-2xl"
        >
          <a
            href="#about"
            (click)="mobileMenuOpen.set(false)"
            class="px-3 py-2 rounded-xl hover:bg-white/[0.06] transition"
            >About</a
          >
          <a
            href="#experience"
            (click)="mobileMenuOpen.set(false)"
            class="px-3 py-2 rounded-xl hover:bg-white/[0.06] transition"
            >Experience</a
          >
          <a
            href="#projects"
            (click)="mobileMenuOpen.set(false)"
            class="px-3 py-2 rounded-xl hover:bg-white/[0.06] transition"
            >Projects</a
          >
          <a
            href="#skills"
            (click)="mobileMenuOpen.set(false)"
            class="px-3 py-2 rounded-xl hover:bg-white/[0.06] transition"
            >Skills</a
          >
          <a
            href="#contact"
            (click)="mobileMenuOpen.set(false)"
            class="btn-primary text-center py-2.5 rounded-xl font-semibold mt-1"
            >Contact Me</a
          >
        </div>
      }
    </header>
  `,
})
export class NavbarComponent {
  readonly state: PortfolioStateService = inject(PortfolioStateService);
  readonly mobileMenuOpen = signal<boolean>(false);
}