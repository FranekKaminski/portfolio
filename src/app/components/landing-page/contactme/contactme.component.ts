import { Component, signal, inject } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contactme',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.scss'
})
export class ContactmeComponent {
  private translate = inject(TranslateService);
  currentLang = signal(this.translate.currentLang || 'en');

  useLanguage(language: string): void {
    this.translate.use(language);
    this.currentLang.set(language);
  }
}
