import { Component, inject, OnInit } from '@angular/core';
import { Drink } from '../../models/drink.model';
import { CommonModule } from '@angular/common';
import { DrinkCategoryLabelPipe } from '../../pipes/drink-category-label.pipe';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DrinkService } from '../../services/drink.service';
 
@Component({
  selector: 'app-drink-details',
  imports: [CommonModule, DrinkCategoryLabelPipe, RouterLink],
  templateUrl: './drink-details.component.html',
  styleUrl: './drink-details.component.scss'
})
export class DrinkDetailsComponent implements OnInit{
  private drinkService = inject(DrinkService);
  private activatedRoute = inject(ActivatedRoute);
  
  // Le symbole "?" après le nom de la propriété indique que "drink" est optionnelle,
  // c'est-à-dire qu'elle peut être de type "Drink" ou "undefined".
  drink?: Drink;

  /**
   * Lors de l'initialisation du composant, on souhaite récupérer l'identifiant de la boisson à afficher
   * depuis l'URL. Pour cela, on utilise le service ActivatedRoute fourni par Angular.
   * 
   * ActivatedRoute expose un observable paramMap qui émet à chaque changement de paramètres de la route.
   * On s'abonne à cet observable pour réagir dynamiquement à tout changement d'URL (par exemple si on navigue
   * vers une autre boisson sans recharger le composant).
   * 
   * paramMap est une structure spéciale (ParamMap) qui permet d'accéder aux paramètres de la route via la méthode .get('nomDuParam').
   * Ici, on utilise paramMap.get('drinkId') pour récupérer la valeur du paramètre 'drinkId' défini dans la route (ex: /drinks/92a1).
   * 
   * Une fois l'identifiant récupéré, on appelle le service DrinkService pour aller chercher la boisson correspondante
   * via une requête HTTP unitaire (getDrinkById). On met ensuite à jour la propriété "drink" du composant avec la boisson reçue.
   * 
   * Ce schéma permet de :
   *  - Réagir à tout changement d'identifiant dans l'URL sans recharger le composant
   *  - Toujours afficher la bonne boisson selon l'URL
   *  - Centraliser la logique de récupération dans le service
   */
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const drinkId = paramMap.get('drinkId')!; // Le "!" indique à TypeScript que la valeur ne sera jamais null ou undefined à cet endroit. En l'occurrence, on sait que ce cas ne peut pas arriver car l'identifiant est nécessaire pour accéder à cette route et donc pour afficher ce composant.
      this.drinkService.getDrinkById(drinkId).subscribe((drink) => {
        this.drink = drink;
      });
    });
  }
}
