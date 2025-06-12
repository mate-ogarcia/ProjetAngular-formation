import { Component, OnInit, inject } from '@angular/core';
import { Drink } from '../../models/drink.model';
import { DrinkCardComponent } from '../drink-card/drink-card.component';
import { DrinkService } from '../../services/drink.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drink-list', 
  imports: [DrinkCardComponent, CommonModule],
  standalone: true,
  templateUrl: './drink-list.component.html',
  styleUrl: './drink-list.component.scss'
})
export class DrinkListComponent implements OnInit {
  // smart component

  // Ancienne manière d'injecter des services
  // constructor(private drinkService: DrinkService) {
  //   this.drinks = this.drinkService.getDrinks();
  // }

  private drinkService = inject(DrinkService);
  
  drinks: Drink[] = [];
  
  ngOnInit(){
    this.drinkService.getDrinks()
      .subscribe((drinks) => {
        this.drinks = drinks;
      }); 
  }

  showLog(drink:Drink){
    console.log(drink);
  }
}
