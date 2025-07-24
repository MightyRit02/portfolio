import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  roles: string[] = ['Frontend Developer', 'Angular Enthusiast', 'UI/UX Explorer'];
  displayedRole = '';
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  ngOnInit(): void {
    this.typeRole();
  }

  typeRole(): void {
    const current = this.roles[this.roleIndex];
    const speed = this.isDeleting ? 50 : 120;

    if (this.isDeleting) {
      this.displayedRole = current.substring(0, this.charIndex--);
    } else {
      this.displayedRole = current.substring(0, this.charIndex++);
    }

    if (!this.isDeleting && this.charIndex === current.length + 1) {
      this.isDeleting = true;
      setTimeout(() => this.typeRole(), 1000);
      return;
    }

    if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
    }

    setTimeout(() => this.typeRole(), speed);
  }
}
