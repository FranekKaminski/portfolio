import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AboutmeComponent } from "./aboutme/aboutme.component";
import { SkillsComponent } from "./skills/skills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ReferencesComponent } from "./references/references.component";
import { ContactmeComponent } from "./contactme/contactme.component";
import { FooterComponent } from "./footer/footer.component";
import { HeroComponent } from "./hero/hero.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AboutmeComponent, SkillsComponent, PortfolioComponent, ReferencesComponent, ContactmeComponent, FooterComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
