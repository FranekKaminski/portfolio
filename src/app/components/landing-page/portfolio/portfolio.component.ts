import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  private translate = inject(TranslateService);
  currentLang = signal(this.translate.currentLang || 'en');
  hoveredIndex: number | null = null;
  isDialogOpen: boolean = false;
  selectedProjectIndex: number = 0;

  projects = [
    {
      image: 'icons/portfolio/join1.png',
      link: '#'
    },
    {
      image: 'icons/portfolio/elpolloloco1.png',
      link: '#'
    },
    {
      image: 'icons/portfolio/dabubble1.png',
      link: '#'
    }
  ];

  useLanguage(language: string): void {
    this.translate.use(language);
    this.currentLang.set(language);
  }

  openDialog(index: number): void {
    this.selectedProjectIndex = index;
    this.isDialogOpen = true;
  }

  closeDialog(): void {
    this.isDialogOpen = false;
  }

  nextProject(): void {
    this.selectedProjectIndex = (this.selectedProjectIndex + 1) % this.projects.length;
  }
}
