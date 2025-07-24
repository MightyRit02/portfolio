import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
   { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'contact', component: ContactComponent },
];
