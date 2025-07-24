import {
  Component,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

interface Skill {
  name: string;
  level: number;
}

interface Certification {
  img: string;
  title: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {
  skills: Skill[] = [
    { name: 'Angular', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 85 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 88 },
    { name: 'TypeScript', level: 75 }
  ];

  certifications: Certification[] = [
    {
      img: 'assets/certifications/frontend.png',
      title: 'Frontend Certificate'
    },
    {
      img: 'assets/certifications/backend.png',
      title: 'Backend Certificate'
    },
    {
      img: 'assets/certifications/fullstack.png',
      title: 'Full Stack Developer'
    }
  ];

  certCarouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1024: { items: 2 }
    },
    navText: ['🡠', '🡢']
  };

  @ViewChildren('skillBar', { read: ElementRef }) skillBars!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fill');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    this.skillBars.forEach((bar) => observer.observe(bar.nativeElement));
  }
}
