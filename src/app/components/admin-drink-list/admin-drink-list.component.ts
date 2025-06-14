import { Component, inject } from '@angular/core';
import { Drink } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';
import { DrinkCardComponent } from '../drink-card/drink-card.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-drink-list',
  imports: [DrinkCardComponent, CommonModule, RouterLink],
  templateUrl: './admin-drink-list.component.html',
  styleUrl: './admin-drink-list.component.scss'
})
export class AdminDrinkListComponent {
  private drinkService = inject(DrinkService);
  
  drinks: Drink[] = [];
  
  ngOnInit(){
    this.drinkService.getDrinks()
      .subscribe((drinks) => {
        this.drinks = drinks;
      }); 
  }
}
