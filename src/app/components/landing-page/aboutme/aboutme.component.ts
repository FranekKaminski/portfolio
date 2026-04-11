import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutme',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  private translate = inject(TranslateService);
  currentLang = signal(this.translate.currentLang || 'en');

  useLanguage(language: string): void {
    this.translate.use(language);
    this.currentLang.set(language);
  }
}
