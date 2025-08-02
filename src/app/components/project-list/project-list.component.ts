import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  video?: string;
}

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements AfterViewInit {
  projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio site built with Angular.',
      image: 'assets/images/portfolio.png',
      technologies: ['Angular', 'SCSS', 'TypeScript'],
      link: 'https://yourportfolio.com',
      video: 'assets/videos/portfolio-demo.mp4'
    },
    {
      title: 'Task Manager App',
      description: 'A to-do app built using Node.js and MongoDB.',
      image: 'assets/images/task.png',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      link: 'https://yourtaskapp.com',
      video: 'assets/videos/task-demo.mp4'
    },
    {
      title: 'Video Project Demo',
      description: 'A short demo with video showcase.',
      image: 'assets/images/video-project.png',
      technologies: ['JavaScript', 'Media'],
      link: 'https://yourvideoproject.com',
      video: 'assets/videos/video-project.mp4'
    }
  ];

  @ViewChildren('cardRef', { read: ElementRef }) cardRefs!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    this.cardRefs.forEach((c) => observer.observe(c.nativeElement));
  }
}
