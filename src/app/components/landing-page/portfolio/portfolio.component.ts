import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

type ProjectSkill = {
  label: string;
  icon: string;
};

type PortfolioProject = {
  number: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  skills: ProjectSkill[];
};

@Component({
  selector: 'app-portfolio',
  imports: [TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  private translate = inject(TranslateService);
  currentLang = signal(this.translate.currentLang || 'en');
  hoveredIndex: number | null = null;
  isDialogOpen: boolean = false;
  selectedProjectIndex: number = 0;

  projects: PortfolioProject[] = [
    {
      number: '01',
      titleKey: 'portfolio.dialog.project1.title',
      descriptionKey: 'portfolio.dialog.project1.description',
      image: 'icons/portfolio/join1.png',
      githubUrl: 'https://github.com/FranekKaminski',
      skills: [
        { label: 'Angular', icon: 'icons/portfolio/Property 1=Angular.png' },
        { label: 'TypeScript', icon: 'icons/portfolio/Property 1=TypeScript.png' },
        { label: 'Firebase', icon: 'icons/portfolio/Property 1=Firebase.png' },
        { label: 'HTML', icon: 'icons/portfolio/html.png' },
        { label: 'CSS', icon: 'icons/portfolio/Property 1=CSS.png' }
      ]
    },
    {
      number: '02',
      titleKey: 'portfolio.dialog.project2.title',
      descriptionKey: 'portfolio.dialog.project2.description',
      image: 'icons/portfolio/elpolloloco1.png',
      githubUrl: 'https://github.com/FranekKaminski',
      liveUrl: 'https://franciszekkaminski.developerakademie.net/Modul%2012%20El%20Pollo%20Loco/',
      skills: [
        { label: 'Javascript', icon: 'icons/portfolio/Property 1=Javascript.png' },
        { label: 'HTML', icon: 'icons/portfolio/html.png' },
        { label: 'CSS', icon: 'icons/portfolio/Property 1=CSS.png' }
      ]
    },
    {
      number: '03',
      titleKey: 'portfolio.dialog.project3.title',
      descriptionKey: 'portfolio.dialog.project3.description',
      image: 'icons/portfolio/dabubble1.png',
      githubUrl: 'https://github.com/FranekKaminski',
      skills: [
        { label: 'Javascript', icon: 'icons/portfolio/Property 1=Javascript.png' },
        { label: 'HTML', icon: 'icons/portfolio/html.png' },
        { label: 'CSS', icon: 'icons/portfolio/Property 1=CSS.png' }
      ]
    }
  ];

  get selectedProject(): PortfolioProject {
    return this.projects[this.selectedProjectIndex];
  }

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
