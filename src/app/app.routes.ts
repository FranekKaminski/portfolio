import { Routes } from '@angular/router';
import { ImprintComponent } from "./components/imprint/imprint.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";

export const routes: Routes = [
    { path: "", component: LandingPageComponent, pathMatch: 'full' },
    { path: "imprint", component: ImprintComponent },
    { path: "impressum", component: ImprintComponent }
];
