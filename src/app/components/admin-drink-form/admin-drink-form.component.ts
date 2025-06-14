import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DrinkCategory } from '../../models/drink.model';

@Component({
  selector: 'app-admin-drink-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-drink-form.component.html',
  styleUrl: './admin-drink-form.component.scss'
})
export class AdminDrinkFormComponent {

  formGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    price: new FormControl<number>(0, [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    category: new FormControl<DrinkCategory>('sweet', [Validators.required]),
    image: new FormControl<string>('', [Validators.required])
  })

  drinksImageUrls = [
    'drinks/cafe-latte.png',
    'drinks/cappuccino.png',
    'drinks/caramel-latte.png',
    'drinks/kokuto-cafe-latte.png',
    'drinks/matcha-latte.png',
    'drinks/taiwanese-tea-cafe-latte.png'
  ]

  createDrink(){
    console.log('Create Drink', this.formGroup.value);
  }

}