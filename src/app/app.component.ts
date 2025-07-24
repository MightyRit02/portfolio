import { Component, AfterViewInit } from '@angular/core';
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
  ngAfterViewInit() {
    const text = '👋 Welcome to my Portfolio.';
    const typedText = document.querySelector('.typed-text') as HTMLElement;
    const cursor = document.querySelector('.cursor') as HTMLElement;

    let i = 0;
    function typeChar() {
      if (i < text.length) {
        typedText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeChar, 80);
      } else {
        cursor.style.display = 'none';
      }
    }

    typeChar();
  }
}
