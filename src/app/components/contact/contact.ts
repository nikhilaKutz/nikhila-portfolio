import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class Contact {
  @ViewChild('contactForm', { static: false }) contactForm!: ElementRef<HTMLFormElement>;

  contactData = {
    name: '',
    email: '',
    message: ''
  };


  submitted = false;

   sendEmail(form: NgForm) {
    if (!this.contactForm) return;
    emailjs.sendForm(
      'your_service_id',
      'your_template_id',
      this.contactForm.nativeElement,
      'your_public_key'
    ).then(
      result => {
        console.log('SUCCESS!', result.text);
        form.reset();
      },
      error => {
        console.log('FAILED...', error.text);
      }
    );
  }
}

