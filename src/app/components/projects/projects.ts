import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class Projects {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'Personal site built with Angular showcasing skills and projects.',
      tech: ['Angular', 'SCSS', 'Animations'],
      codeLink: 'https://github.com/yourusername/portfolio',
      liveLink: 'https://yourportfolio.com'
    },
    {
      title: 'Weather App',
      description: 'Displays live weather info using OpenWeather API.',
      tech: ['Angular', 'API Integration', 'RxJS'],
      codeLink: '',
      liveLink: ''
    },
    // Add more projects as needed
  ];
}
