import { Routes } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { ImprintComponent } from './landingPage/imprint/imprint.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'imprint', component: ImprintComponent},
];
