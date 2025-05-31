import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Theme {
  private currentTheme: 'dark' | 'light' = 'dark';

  constructor() {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    this.setTheme(savedTheme || 'dark');
  }

  toggleTheme() {
    this.setTheme(this.currentTheme === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: 'dark' | 'light') {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(`${theme}-theme`);
  }

  getTheme(): 'dark' | 'light' {
    return this.currentTheme;
  }
}
