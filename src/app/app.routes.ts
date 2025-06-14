import { Routes } from '@angular/router';
import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminDrinkFormComponent } from './components/admin-drink-form/admin-drink-form.component';
import { AdminDrinkListComponent } from './components/admin-drink-list/admin-drink-list.component';

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
  },
  {
    path: 'admin',
    redirectTo: 'admin/drinks',
    pathMatch: 'full'
  },
  {
    path: 'admin/drinks',
    component: AdminDrinkListComponent
  },
  {
    path: 'admin/drinks/create',
    component: AdminDrinkFormComponent
  },
  {
    path: 'admin/drinks/:drinkId/edit',
    component: AdminDrinkFormComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**', // wildcard : gérer toutes les autres url qui ne sont pas déjà gérées par les routes ci-dessus
    component : NotFoundComponent 
  }
];
