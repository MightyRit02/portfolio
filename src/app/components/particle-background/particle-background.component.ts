import { Component, OnInit } from '@angular/core';
import { tsParticles } from '@tsparticles/engine';
import { loadAll } from '@tsparticles/all';

@Component({
  selector: 'app-particle-background',
  standalone: true,
  templateUrl: './particle-background.component.html',
  styleUrls: ['./particle-background.component.scss']
})
export class ParticleBackgroundComponent implements OnInit {
  async ngOnInit(): Promise<void> {
    await loadAll(tsParticles);  // Load all engine features

    await tsParticles.load({
      id: 'tsparticles',
      options: {
        fullScreen: {
          enable: false,
          zIndex: -1
        },
        background: {
          color: '#ffffff'
        },
        fpsLimit: 60,
        particles: {
          number: { value: 80 },
          size: { value: 3 },
          color: { value: '#f40c7cff' },
           opacity: { value: 0.4},
          links: {
            enable: true,
            distance: 150,
            color: '#1c0101ff',
            opacity: 0.2   
          },
          move: {
            enable: true,
            speed: 2
          }
        }
      }
    });
  }
}
