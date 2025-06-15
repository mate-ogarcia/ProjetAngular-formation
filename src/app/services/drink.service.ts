import { inject, Injectable } from '@angular/core';
import { Drink } from '../models/drink.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private httpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:3000/drinks';

  getDrinks(): Observable<Drink[]>{
    return this.httpClient.get<Drink[]>(this.baseUrl);
  }

  getDrinkById(drinkId: string): Observable<Drink>{
    return this.httpClient.get<Drink>(`${this.baseUrl}/${drinkId}`);
  }

  createDrink(drink: Drink): Observable<Drink>{
    return this.httpClient.post<Drink>(this.baseUrl, drink); // Pour le typage on sait que le backend retourne un Drink parce que c'est le type de la réponse de la requête POST
  }

  updateDrink(drinkId: string, drink: Drink): Observable<Drink>{
    return this.httpClient.put<Drink>(`${this.baseUrl}/${drinkId}`, drink);
  }

  deleteDrink(drinkId: string): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/${drinkId}`);
  }
}
