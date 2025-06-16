import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // ------------------------------------------------------------

  title = 'test';
  inputValue = '';
  disabledButton = true;
  divStyle : string = "text-align:center";
  divClass : string = "text-center";
  isCentered: boolean = true;
  ages:number[] = [10,12,14];
  people:({name:string, age:number})[] = [
    {name: 'John', age: 20},
    {name: 'Jane', age: 21},
    {name: 'Jim', age: 22},
    {name: 'Jill', age: 23},
    {name: 'Jack', age: 24},
  ];

  userRole:'admin' | 'user' | 'guest' = 'admin';

  ngOnInit() {
    console.log('ngOnInit');
  }

  logKeyUpEvent(event: KeyboardEvent) {
    // const input = event.target as HTMLInputElement;
    // this.inputValue = input.value;
    console.log(event);
  }

  // ------------------------------------------------------------

  /**
   * Choix entre inject, constructor et ngOnInit :
   * 
   * 1. inject() :
   *    - Utilisé pour l'injection de dépendances dans les composants/services
   *    - Plus moderne et recommandé dans Angular 14+
   *    - Syntaxe plus concise
   *    - Meilleure pour le tree-shaking
   *    - Exemple : private router = inject(Router);
   * 
   * 2. constructor() :
   *    - Utilisé pour l'initialisation basique
   *    - Exécuté avant ngOnInit
   *    - Bon pour les injections de dépendances simples
   *    - Utile quand on a besoin d'accéder aux dépendances dans d'autres méthodes
   *    - Exemple : constructor(public router: Router) {}
   * 
   * 3. ngOnInit() :
   *    - Exécuté après le constructor
   *    - Idéal pour l'initialisation complexe
   *    - Bon pour les appels HTTP, souscriptions, etc.
   *    - S'exécute une seule fois après l'initialisation du composant
   *    - Exemple : ngOnInit() { this.loadData(); }
   * 
   * Règle générale :
   * - inject() : Pour les dépendances simples
   * - constructor() : Pour l'initialisation basique et accès public aux dépendances
   * - ngOnInit() : Pour la logique d'initialisation complexe
   */
  constructor(public router: Router) {} // pour avoir accès à la route

}
