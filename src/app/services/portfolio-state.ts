import { Injectable, signal } from '@angular/core';
import { ProjectItem } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root',
})
export class PortfolioStateService {
  // Theme & Pointer State (matches navbar.ts and app.ts)
  readonly themeMode = signal<'cyber' | 'amber'>('cyber');
  readonly pointerX = signal<number>(0);
  readonly pointerY = signal<number>(0);
  readonly mouseOffset = signal<{ x: number; y: number }>({ x: 0, y: 0 });

  // UI & Modal State
  readonly emailCopied = signal<boolean>(false);
  readonly toastMessage = signal<string | null>(null);
  readonly activeProjectCategory = signal<string>('All');
  readonly activeExperienceCategory = signal<string>('All');
  readonly selectedProject = signal<ProjectItem | null>(null);

  toggleTheme(): void {
    const next = this.themeMode() === 'cyber' ? 'amber' : 'cyber';
    this.themeMode.set(next);
    document.documentElement.classList.toggle('theme-amber', next === 'amber');
  }

  updatePointer(clientX: number, clientY: number): void {
    this.pointerX.set(clientX);
    this.pointerY.set(clientY);
    if (typeof window !== 'undefined' && window.innerWidth > 0) {
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      this.mouseOffset.set({ x, y });
    }
  }

  updateMouseOffset(x: number, y: number): void {
    this.mouseOffset.set({ x, y });
  }

  copyEmail(): void {
    navigator.clipboard?.writeText('Pranwat54@gmail.com');
    this.emailCopied.set(true);
    this.showToast('Email copied: Pranwat54@gmail.com');
    setTimeout(() => this.emailCopied.set(false), 2500);
  }

  openProjectModal(project: ProjectItem): void {
    this.selectedProject.set(project);
  }

  closeProjectModal(): void {
    this.selectedProject.set(null);
  }

  showToast(message: string): void {
    this.toastMessage.set(message);
    setTimeout(() => {
      if (this.toastMessage() === message) {
        this.toastMessage.set(null);
      }
    }, 3000);
  }
}