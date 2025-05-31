import { Component } from '@angular/core';
import { Theme } from '../../services/theme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  imports: [CommonModule],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss'
})
export class ThemeToggle {
  constructor(public themeService: Theme) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}


