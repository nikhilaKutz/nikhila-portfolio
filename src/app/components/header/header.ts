import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { ThemeToggle } from '../theme-toggle/theme-toggle';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [ThemeToggle,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isSticky = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isSticky = window.pageYOffset > 50;
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
