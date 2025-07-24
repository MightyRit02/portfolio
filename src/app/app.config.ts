import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'; // ✅ Required for ngx-owl-carousel-o
import { routes } from './app.routes';

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations() 
  ]
};
