import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParticleBackgroundComponent } from './components/particle-background/particle-background.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    ParticleBackgroundComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectListComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  private readonly fullText = '👋 Welcome to my Portfolio.';
  private readonly typingSpeed = 80; // ms per character

  @ViewChild('typedText', { static: false, read: ElementRef }) typedTextRef?: ElementRef<HTMLElement>;
  @ViewChild('cursor', { static: false, read: ElementRef }) cursorRef?: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    const typedEl = this.typedTextRef?.nativeElement;
    const cursorEl = this.cursorRef?.nativeElement;

    if (!typedEl || !cursorEl) return;

    let idx = 0;

    const typeChar = () => {
      if (idx < this.fullText.length) {
        typedEl.textContent += this.fullText.charAt(idx);
        idx++;
        setTimeout(typeChar, this.typingSpeed);
      } else {
        // show cursor briefly then hide (or keep visible if you prefer)
        cursorEl.style.opacity = '1';
        setTimeout(() => {
          cursorEl.style.opacity = '0';
        }, 1500);
      }
    };

    // start typing after short delay so fade-in is perceptible
    setTimeout(() => {
      typeChar();
    }, 300);
  }
}
