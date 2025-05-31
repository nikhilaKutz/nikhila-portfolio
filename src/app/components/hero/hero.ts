import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  downloadResume() {
  window.open('/assets/files/Nikhila_Resume.pdf', '_blank');
}

}
