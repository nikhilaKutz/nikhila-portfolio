import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('700ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class Skills {
  skills = [
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178c6' },
    { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e' },
    { name: 'HTML5', icon: 'fab fa-html5', color: '#e34c26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572b6' },
    { name: 'SASS', icon: 'fab fa-sass', color: '#cc6699' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#f34f29' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#ffffff' },
  ];
}
