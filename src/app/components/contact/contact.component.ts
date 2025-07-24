import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = signal(false);
  loading = signal(false);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get name() {
    return this.contactForm.get('name')!;
  }

  get email() {
    return this.contactForm.get('email')!;
  }

  get message() {
    return this.contactForm.get('message')!;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) return;

    this.loading.set(true);

    const serviceId = 'service_rbzakcd';
    const templateId = 'template_autoreply';
    const publicKey = 'FlJ3CX3iIt4ZFAQ8-';

    emailjs
      .send(serviceId, templateId, this.contactForm.value, publicKey)
      .then(() => {
        this.submitted.set(true);
        this.contactForm.reset();
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
      })
      .finally(() => {
        this.loading.set(false);
      });
  }
}
