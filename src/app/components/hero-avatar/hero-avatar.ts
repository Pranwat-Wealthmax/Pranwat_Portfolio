import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
// Note: If your file is named portfolio-state.service.ts, add '.service' to the path below:
import { PortfolioStateService } from '../../services/portfolio-state';

@Component({
  selector: 'app-hero-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="hero"
      class="relative min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <!-- Left: Kinetic Headline & Action Hub -->
        <div class="lg:col-span-7 space-y-6">
          <div
            class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/20 text-xs font-mono text-cyan-300"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"
              ></span>
            </span>
            Available for SDE, Frontend &amp; UI/UX Opportunities
          </div>

          <div class="space-y-2">
            <p class="font-mono text-sm sm:text-base text-slate-400 tracking-wide">
              Hi there, I'm
            </p>
            <h1
              class="font-display text-4xl sm:text-6xl lg:text-[4.1rem] font-extrabold tracking-tight leading-[1.06] text-white"
            >
              Pranwat Singh
              <span class="block gradient-text-accent mt-1">Reen.</span>
            </h1>
          </div>

          <div
            class="h-8 flex items-center font-mono text-base sm:text-xl text-slate-300"
          >
            <span class="text-cyan-400 mr-2">&gt;</span>
            <span>{{ currentRoleText() }}</span>
            <span
              class="inline-block w-2.5 h-5 ml-1 bg-cyan-400 animate-pulse"
            ></span>
          </div>

          <p
            class="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            Computer Science Engineer (<span class="text-slate-200 font-medium"
              >B.Tech '26</span
            >) and Management Trainee crafting high-contrast digital products,
            interactive Angular &amp; web interfaces, and deception-based network
            security architectures.
          </p>

          <div class="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#projects"
              class="btn-primary px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2"
            >
              Explore Projects
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <button
              type="button"
              (click)="state.copyEmail()"
              class="px-5 py-3 rounded-xl glass-panel hover:bg-white/[0.06] text-slate-200 font-medium text-sm transition flex items-center gap-2 cursor-pointer"
            >
              <svg
                class="w-4 h-4 text-cyan-400"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path
                  d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
                />
              </svg>
              <span>{{ state.emailCopied() ? 'Copied!' : 'Copy Email' }}</span>
            </button>

            <div class="flex items-center gap-2 ml-1">
              <a
                href="https://github.com/Pranwat-Wealthmax?tab=stars"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                class="p-3 rounded-xl glass-panel hover:bg-white/[0.08] text-slate-300 hover:text-white transition"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/pranwat-singh-7180872a6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                class="p-3 rounded-xl glass-panel hover:bg-white/[0.08] text-slate-300 hover:text-white transition"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Interactive Live Avatar Frame -->
        <div class="lg:col-span-5">
          <div
            class="relative rounded-[1.75rem] p-5 sm:p-6 glass-panel overflow-hidden shadow-2xl transition-colors"
            [class.border-cyan-400]="isDragOver()"
            (dragover)="onDragOver($any($event))"
            (dragleave)="isDragOver.set(false)"
            (drop)="onDrop($any($event))"
          >
            <!-- Top Avatar Control Bar -->
            <div class="flex items-center justify-between mb-4 relative z-20">
              <div
                class="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10"
              >
                <span class="relative flex h-2 w-2">
                  <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                  ></span>
                  <span
                    class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"
                  ></span>
                </span>
                <span
                  class="font-mono text-[10px] tracking-widest uppercase text-slate-300"
                  >LIVE</span
                >
              </div>

              <div class="flex items-center gap-1.5">
                <button
                  type="button"
                  (click)="fileInput.click()"
                  class="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 font-mono text-[11px] text-slate-300 hover:text-cyan-300 transition cursor-pointer"
                >
                  Change Photo
                </button>
                <input
                  #fileInput
                  type="file"
                  accept="image/*"
                  class="hidden"
                  (change)="onFileSelected($any($event))"
                />
              </div>
            </div>

            <!-- Glowing Circular Avatar Stage -->
            <div class="relative flex items-center justify-center py-4 my-1">
              <div
                class="relative w-60 h-60 sm:w-64 sm:h-64 flex items-center justify-center"
              >
                <!-- Rotating Cyber Halo -->
                <div
                  class="absolute -inset-2 rounded-full opacity-90 blur-[1px]"
                  style="background: conic-gradient(from 0deg, var(--accent-primary), var(--accent-secondary), transparent 45%, var(--accent-primary)); animation: spinSlow 10s linear infinite;"
                ></div>
                <div
                  class="absolute -inset-4 rounded-full opacity-25 blur-xl pointer-events-none"
                  style="background: radial-gradient(circle, var(--accent-primary), var(--accent-secondary));"
                ></div>

                <!-- Avatar Viewport -->
                <div
                  class="relative w-full h-full rounded-full bg-[#090d16] border-2 border-white/15 overflow-hidden flex items-center justify-center shadow-inner z-10"
                >
                  @if (customAvatarSrc()) {
                    <img
                      [src]="customAvatarSrc()"
                      alt="Pranwat Singh Reen"
                      (error)="onImageLoadError()"
                      class="w-full h-full object-cover object-top transition-transform duration-200"
                      [style.transform]="
                        'translate(' +
                        state.mouseOffset().x * 6 +
                        'px, ' +
                        state.mouseOffset().y * 6 +
                        'px) scale(1.04)'
                      "
                    />
                  } @else {
                    <!-- Fallback Illustrated Cyber Avatar -->
                    <svg
                      viewBox="0 0 260 260"
                      class="w-full h-full transition-transform duration-200"
                      [style.transform]="
                        'translate(' +
                        state.mouseOffset().x * 5 +
                        'px, ' +
                        state.mouseOffset().y * 5 +
                        'px)'
                      "
                    >
                      <defs>
                        <radialGradient id="bgGlow" cx="50%" cy="45%" r="55%">
                          <stop offset="0%" stop-color="#172033" />
                          <stop offset="100%" stop-color="#070a11" />
                        </radialGradient>
                        <linearGradient
                          id="turbanDark"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stop-color="#06b6d4" />
                          <stop offset="18%" stop-color="#1e222d" />
                          <stop offset="82%" stop-color="#181b24" />
                          <stop offset="100%" stop-color="#8b5cf6" />
                        </linearGradient>
                        <linearGradient
                          id="hoodieBody"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stop-color="#06b6d4" />
                          <stop offset="12%" stop-color="#222631" />
                          <stop offset="88%" stop-color="#1c1f28" />
                          <stop offset="100%" stop-color="#8b5cf6" />
                        </linearGradient>
                      </defs>
                      <rect width="260" height="260" fill="url(#bgGlow)" />
                      <g fill="#06b6d4" opacity="0.9">
                        <rect x="34" y="78" width="4" height="12" rx="1" />
                        <rect x="30" y="82" width="12" height="4" rx="1" />
                        <rect x="44" y="46" width="4" height="4" rx="1" />
                        <rect x="36" y="164" width="4" height="4" rx="1" />
                      </g>
                      <g fill="#8b5cf6" opacity="0.9">
                        <rect x="218" y="42" width="4" height="12" rx="1" />
                        <rect x="214" y="46" width="12" height="4" rx="1" />
                        <rect x="226" y="138" width="4" height="12" rx="1" />
                        <rect x="222" y="142" width="12" height="4" rx="1" />
                      </g>
                      <path
                        d="M36 260 C42 204, 72 184, 130 184 C188 184, 218 204, 224 260 Z"
                        fill="url(#hoodieBody)"
                      />
                      <path
                        d="M78 186 Q130 226 182 186 Q168 214 130 218 Q92 214 78 186 Z"
                        fill="#14171f"
                      />
                      <rect x="108" y="206" width="4" height="48" rx="2" fill="#06b6d4" />
                      <rect x="148" y="206" width="4" height="48" rx="2" fill="#8b5cf6" />
                      <path d="M112 162 L148 162 L152 198 L108 198 Z" fill="#f3b68c" />
                      <path
                        d="M84 102 C84 66, 176 66, 176 102 C176 144, 158 172, 130 172 C102 172, 84 144, 84 102 Z"
                        fill="#fbc49b"
                      />
                      <path
                        d="M84 114 C85 152, 104 174, 130 174 C156 174, 175 152, 176 114 C172 136, 156 154, 130 154 C104 154, 88 136, 84 114 Z"
                        fill="#181a20"
                      />
                      <path
                        d="M107 142 Q122 135 130 142 Q138 135 153 142 Q142 146 130 143 Q118 146 107 142 Z"
                        fill="#181a20"
                      />
                      <path
                        d="M117 148 Q130 155 143 148"
                        stroke="#8c4f3e"
                        stroke-width="2.5"
                        fill="none"
                        stroke-linecap="round"
                      />
                      <g
                        [attr.transform]="
                          'translate(' +
                          state.mouseOffset().x * 3 +
                          ', ' +
                          state.mouseOffset().y * 2 +
                          ')'
                        "
                      >
                        <ellipse cx="109" cy="112" rx="10" ry="8" fill="#ffffff" />
                        <circle cx="110" cy="112" r="5.5" fill="#2c1d16" />
                        <circle cx="108" cy="110" r="2" fill="#ffffff" />
                        <ellipse cx="151" cy="112" rx="10" ry="8" fill="#ffffff" />
                        <circle cx="150" cy="112" r="5.5" fill="#2c1d16" />
                        <circle cx="148" cy="110" r="2" fill="#ffffff" />
                      </g>
                      <path
                        d="M96 99 Q109 93 121 99"
                        stroke="#16181e"
                        stroke-width="4.5"
                        fill="none"
                        stroke-linecap="round"
                      />
                      <path
                        d="M139 99 Q151 93 164 99"
                        stroke="#16181e"
                        stroke-width="4.5"
                        fill="none"
                        stroke-linecap="round"
                      />
                      <path
                        d="M72 96 C66 44, 102 22, 130 22 C158 22, 194 44, 188 96 C182 78, 156 68, 130 78 C104 68, 78 78, 72 96 Z"
                        fill="url(#turbanDark)"
                      />
                      <path
                        d="M84 86 Q130 58 176 86"
                        stroke="#0d1017"
                        stroke-width="2.5"
                        fill="none"
                      />
                    </svg>
                  }
                </div>

                <!-- Floating Status Badge -->
                <div
                  class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-cyan-400/30 shadow-lg absolute -right-4 top-6 z-20"
                >
                  <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span class="font-mono text-[10px] text-slate-200"
                    >UI/UX + Security</span
                  >
                </div>
              </div>
            </div>

            <!-- Footer Metadata Bar -->
            <div
              class="mt-3 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate-400"
            >
              <span>B.Tech CSE '26 · Jammu</span>
              <span class="text-cyan-400">Drag &amp; drop photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroAvatarComponent implements OnInit, OnDestroy {
  readonly state: PortfolioStateService = inject(PortfolioStateService);

  // Loads directly from your root public/ folder (e.g., public/Duck-ai-image-2026-11-13-08-47.jpeg)
  readonly defaultPublicAvatar = '/Duck-ai-image-2026-11-13-08-47.jpeg';
  readonly customAvatarSrc = signal<string | null>(this.defaultPublicAvatar);
  readonly isDragOver = signal<boolean>(false);

  private readonly roles = [
    'Software Engineer & Web Developer',
    'UI/UX Designer & Interface Architect',
    'Network Security & Honeypot Builder',
    'Management Trainee · B.Tech CSE 2026'
  ];

  readonly currentRoleText = signal<string>('');
  private roleIdx = 0;
  private charIdx = 0;
  private isDeleting = false;
  private timerId: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.tickTypewriter();
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

  private tickTypewriter(): void {
    const currentWord = this.roles[this.roleIdx];
    this.currentRoleText.set(
      this.isDeleting
        ? currentWord.substring(0, this.charIdx--)
        : currentWord.substring(0, this.charIdx++)
    );

    let speed = this.isDeleting ? 34 : 64;
    if (!this.isDeleting && this.charIdx === currentWord.length + 1) {
      speed = 1900;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIdx === 0) {
      this.isDeleting = false;
      this.roleIdx = (this.roleIdx + 1) % this.roles.length;
      speed = 360;
    }

    this.timerId = setTimeout(() => this.tickTypewriter(), speed);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.loadImageFile(input.files[0]);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver.set(true);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver.set(false);
    const file = event.dataTransfer?.files?.[0];
    if (file) {
      this.loadImageFile(file);
    }
  }

  onImageLoadError(): void {
    // Falls back cleanly to the built-in illustrated avatar if the public/ image isn't found
    this.customAvatarSrc.set(null);
  }

  private loadImageFile(file: File): void {
    if (!file.type.startsWith('image/')) {
      this.state.showToast('Please select a valid image file.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.customAvatarSrc.set(reader.result as string);
      this.state.showToast('Live avatar updated!');
    };
    reader.readAsDataURL(file);
  }
}