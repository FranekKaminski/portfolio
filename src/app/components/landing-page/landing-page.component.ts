import { Component } from '@angular/core';
import { AboutmeComponent } from "../../components/landing-page/aboutme/aboutme.component";
import { SkillsComponent } from "../../components/landing-page/skills/skills.component";
import { PortfolioComponent } from "../../components/landing-page/portfolio/portfolio.component";
import { ReferencesComponent } from "../../components/landing-page/references/references.component";
import { ContactmeComponent } from "../../components/landing-page/contactme/contactme.component";
import { HeroComponent } from "../..//components/landing-page/hero/hero.component";

@Component({
  selector: 'app-landing-page',
  imports: [AboutmeComponent, SkillsComponent, PortfolioComponent, ReferencesComponent, ContactmeComponent, HeroComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
