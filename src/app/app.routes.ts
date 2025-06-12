import { Routes } from '@angular/router';
import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';
import { DrinkListComponent } from './components/drink-list/drink-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'drinks',
    pathMatch: 'full' // pour indiquer que c'est uniquement l'url vide 
  },
  {
    path: 'drinks',
    component: DrinkListComponent
  },
  {
    path: 'drinks/:drinkId',
    component: DrinkDetailsComponent
  }
];
