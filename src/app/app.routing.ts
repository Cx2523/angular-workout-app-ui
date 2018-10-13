import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './UserHome/userhome.component';
import { HomePageComponent } from './HomePage/HomePage.component';
import { SignUpPageComponent } from './SignUpPage/SignUpPage.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'user', component: UserHomeComponent },
  { path: 'signup', component: SignUpPageComponent}
];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);