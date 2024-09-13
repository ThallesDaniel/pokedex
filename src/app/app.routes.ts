import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { TestComponent } from './pages/test/test.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'details', component: DetailsComponent },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {path: 'test', component: TestComponent},
  {path: 'test/:id', component: TestComponent}
];
