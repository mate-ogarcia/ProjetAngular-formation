import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DrinkCategory } from '../../models/drink.model';

@Component({
  selector: 'app-admin-drink-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-drink-form.component.html',
  styleUrl: './admin-drink-form.component.scss'
})
export class AdminDrinkFormComponent {

  formGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl<number>(0, [Validators.required , Validators.min(0.01)]),
    description: new FormControl<string>('', [Validators.required , Validators.minLength(10)]),
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
    this.formGroup.markAllAsTouched(); // pour afficher les erreurs de validation
    if(this.formGroup.invalid){
      return;
    }
    
    console.log('Create Drink', this.formGroup.value);
  }

  isInvalidAndTouchedOrDirty(formControl: FormControl){
    return formControl.invalid && (formControl.dirty || !formControl.untouched);
  }
} 