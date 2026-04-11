import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  private translate = inject(TranslateService);
  currentLang = signal(this.translate.currentLang || 'en');

  useLanguage(language: string): void {
    this.translate.use(language);
    this.currentLang.set(language);
  }
}
