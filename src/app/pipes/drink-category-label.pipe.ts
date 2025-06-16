import { Pipe, PipeTransform } from '@angular/core';
import { DrinkCategory } from '../models/drink.model';

@Pipe({
  name: 'drinkCategoryLabel'
})
export class DrinkCategoryLabelPipe implements PipeTransform {

  // Pipe qui transforme la catégorie d'un drink en une chaîne de caractères
  transform(category: DrinkCategory): string {
    // Dans les pipes il faut ds fonctions pures, que de l'affichage pour éviter les effets de bords
    // On ne doit pas faire d'appel à des services, des requêtes HTTP, des calculs, etc.
    // On ne doit pas modifier les données, on doit uniquement les afficher
    // On ne doit pas faire d'appel à des services, des requêtes HTTP, des calculs, etc.
    // Pourquoi ?
    // Parce que les pipes sont appelés à chaque changement de données
    // Si on fait un appel à un service, une requête HTTP, un calcul, etc.
    // On va avoir un problème de performance
    // On va avoir un problème de synchronisation
    // On va avoir un problème de sécurité
    // On va avoir un problème de maintenance
    // On va avoir un problème de scalabilité
    switch (category) {
      case 'sweet':
        return 'Sweet';
      case 'low-sugar':
        return 'Low sugar';
      case 'no-sugar':
        return 'No sugar';
    }
  }

}
