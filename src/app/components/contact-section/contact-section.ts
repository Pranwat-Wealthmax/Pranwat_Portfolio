import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PortfolioStateService } from '../../services/portfolio-state';

@Component({
  selector: 'app-contact-section',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="bento-card rounded-3xl p-7 sm:p-12 relative overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div class="lg:col-span-5 space-y-6">
            <div>
              <span class="font-mono text-xs uppercase tracking-[0.2em] text-accent-primary">05 // Get In Touch</span>
              <h2 class="text-3xl sm:text-4xl font-bold text-white mt-2">
                Let's build something <span class="gradient-text">memorable.</span>
              </h2>
              <p class="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
                Whether you're hiring for a software engineering, UI/UX design, or product-oriented role—or simply want to collaborate—my inbox is always open.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-[#08090c]/80 border border-white/10 flex items-center justify-between gap-3">
              <div class="min-w-0">
                <div class="text-[11px] font-mono text-slate-400 uppercase">Direct Email</div>
                <a href="mailto:Pranwat54@gmail.com" class="block text-sm sm:text-base font-mono text-white hover:text-cyan-400 transition-colors truncate mt-0.5">
                  Pranwat54&#64;gmail.com
                </a>
              </div>
              <button
                type="button"
                (click)="state.copyEmail()"
                class="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-mono text-accent-primary shrink-0 transition-all cursor-pointer active:scale-95"
              >
                {{ state.emailCopied() ? 'Copied!' : 'Copy' }}
              </button>
            </div>

            <div class="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/pranwat-singh-7180872a6"
                target="_blank"
                rel="noopener noreferrer"
                class="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 flex items-center gap-2 transition-all"
              >
                <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>LinkedIn Profile ↗</span>
              </a>
              <a
                href="https://github.com/Pranwat-Wealthmax?tab=stars"
                target="_blank"
                rel="noopener noreferrer"
                class="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 flex items-center gap-2 transition-all"
              >
                <span class="w-2 h-2 rounded-full bg-violet-400"></span>
                <span>GitHub (&#64;Pranwat-Wealthmax) ↗</span>
              </a>
            </div>

            <div class="flex items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span>📍 Jammu, India</span>
              <span>•</span>
              <span>IST (UTC+5:30)</span>
            </div>
          </div>

          <div class="lg:col-span-7">
            <form [formGroup]="contactForm" (ngSubmit)="submitForm()" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="sender-name" class="block text-xs font-mono text-slate-400 mb-1.5">YOUR NAME</label>
                  <input
                    id="sender-name"
                    type="text"
                    formControlName="name"
                    placeholder="Alex Sharma"
                    class="w-full px-4 py-3 rounded-xl bg-[#08090c]/90 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label for="sender-email" class="block text-xs font-mono text-slate-400 mb-1.5">YOUR EMAIL</label>
                  <input
                    id="sender-email"
                    type="email"
                    formControlName="email"
                    placeholder="alex@company.com"
                    class="w-full px-4 py-3 rounded-xl bg-[#08090c]/90 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label for="sender-message" class="block text-xs font-mono text-slate-400 mb-1.5">MESSAGE</label>
                <textarea
                  id="sender-message"
                  rows="4"
                  formControlName="message"
                  placeholder="Tell me about your team, project, or opportunity..."
                  class="w-full px-4 py-3 rounded-xl bg-[#08090c]/90 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>
              </div>

              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <button
                  type="submit"
                  [disabled]="contactForm.invalid"
                  class="px-6 py-3.5 rounded-xl accent-gradient-bg disabled:opacity-50 text-slate-950 font-semibold text-sm shadow-lg hover:opacity-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                </button>

                @if (submitted()) {
                  <span class="text-xs font-mono text-emerald-400">
                    ✓ Message received! I'll get back to you shortly.
                  </span>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactSectionComponent {
  readonly state = inject(PortfolioStateService);
  private readonly fb = inject(FormBuilder);

  readonly submitted = signal(false);
  readonly contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(5)]],
  });

  submitForm(): void {
    if (this.contactForm.invalid) return;
    this.submitted.set(true);
    this.state.showToast('Message sent to Pranwat!');
    this.contactForm.reset();
    setTimeout(() => this.submitted.set(false), 4500);
  }
}
