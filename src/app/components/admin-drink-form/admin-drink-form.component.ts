import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Drink, DrinkCategory } from '../../models/drink.model';
import { DrinkService } from '../../services/drink.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-drink-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './admin-drink-form.component.html',
  styleUrl: './admin-drink-form.component.scss'
})
export class AdminDrinkFormComponent implements OnInit {

  private drinkService = inject(DrinkService); // pour créer une nouvelle boisson
  private router = inject(Router); // pour rediriger l'utilisateur vers la page des boissons
  private activatedRoute = inject(ActivatedRoute);

  drink?: Drink;
  
  formGroup = new FormGroup({
    name: new FormControl<string>('', {validators: [Validators.required, Validators.minLength(3)], nonNullable: true }), 
    price: new FormControl<number>(0, {validators: [Validators.required , Validators.min(0.01)], nonNullable: true }),
    description: new FormControl<string>('', {validators: [Validators.required , Validators.minLength(10)], nonNullable: true }),
    category: new FormControl<DrinkCategory>('sweet', {validators: [Validators.required], nonNullable: true }),
    image: new FormControl<string>('', {validators: [Validators.required], nonNullable: true })
  })

  drinksImageUrls = [
    'drinks/cafe-latte.png',
    'drinks/cappuccino.png',
    'drinks/caramel-latte.png',
    'drinks/kokuto-cafe-latte.png',
    'drinks/matcha-latte.png',
    'drinks/taiwanese-tea-cafe-latte.png'
  ]

  ngOnInit(): void {
    if (this.router.url.endsWith('/edit')){
      this.activatedRoute.paramMap.subscribe((paramMap) => {
        const drinkId = paramMap.get('drinkId');
        if (drinkId){
          this.drinkService.getDrinkById(drinkId).subscribe((drink) => {
            this.drink = drink;
            this.formGroup.patchValue(drink);
          });
        }
      });
    }
  }

  createDrink(){
    // FAIRE ATTENTION AU TYPAGE DE VALUE (UNDEFINED / NULL) = Eviter le <partial> et déclarer des champs de cette façon {validators: [Validators.required, Validators.minLength(3)], nonNullable: true }
    // console.log('Create Drink', this.formGroup.value);
    // const formValue = this.formGroup.getRawValue(); // pour récupérer les valeurs du formulaire mais pas de façon "partial" plus précis
    this.drinkService.createDrink(this.formGroup.getRawValue()).subscribe(() => {
      this.router.navigate(['/admin/drinks']);
    });
  }

saveDrink(){
  this.formGroup.markAllAsTouched(); // pour afficher les erreurs de validation
  if(this.formGroup.invalid){
    return;
  }

  if(this.drink){
    this.updateDrink();
  } else {
    this.createDrink();
  }
}

updateDrink(){
  this.drinkService.updateDrink(this.drink!.id!, this.formGroup.getRawValue()).subscribe(() => {
    this.router.navigate(['/admin/drinks']);
  });
}

deleteDrink(){
  this.drinkService.deleteDrink(this.drink!.id!).subscribe(() => {
    this.router.navigate(['/admin/drinks']);
  });
}


  isInvalidAndTouchedOrDirty(formControl: FormControl){
    return formControl.invalid && (formControl.dirty || !formControl.untouched);
  }
} 