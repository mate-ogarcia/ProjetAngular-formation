import { CommonModule } from '@angular/common';
import { Drink } from '../../models/drink.model';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { DrinkCategoryLabelPipe } from '../../pipes/drink-category-label.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-drink-card',
  imports: [CommonModule, DrinkCategoryLabelPipe, RouterLink],
  templateUrl: './drink-card.component.html',
  styleUrl: './drink-card.component.scss'
})
  export class DrinkCardComponent {
  // dumb component
  // ! = non null assertion 
  // required:true = sert à définir le fait qu'on est sur qu'il y aura du contenu et qu'elle est indispensable
  @Input({required:true}) drink!: Drink;
  @Output()
  onClick:EventEmitter<Drink> = new EventEmitter<Drink>();
  @Input() isAdmin = false;

  ngOnInit(): void {
    console.log("ngOnInit", this.drink);
  }

  constructor(){
    console.log('constructor', this.drink);
  }

} 
