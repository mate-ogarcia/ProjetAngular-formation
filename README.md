# Formation de Gaëtan Rouziès - Angular

## Présentation

Ce projet est une application Angular moderne qui met en pratique les concepts fondamentaux et avancés du framework, en utilisant les dernières fonctionnalités (standalone components, services, routing, pipes, interceptors, forms réactifs, etc.).

---

## Fonctionnalités principales
- Affichage d'une liste de boissons (mockées via un json-server)
- Détail d'une boisson avec navigation dynamique
- Administration (création de boisson) via un formulaire réactif
- Gestion des erreurs HTTP (interceptor 404)
- Internationalisation (locale française)
- Utilisation de Bootstrap pour le style

---

## Concepts Angular abordés

### 1. **Standalone Components**
- Les composants, pipes et services sont déclarés sans NgModule.
- Les imports nécessaires (CommonModule, ReactiveFormsModule, etc.) sont ajoutés directement dans le décorateur `@Component`.
- Depuis Angular 19+, `standalone` est le comportement par défaut.

```

### 2. **Services & Injection de dépendances**
- Utilisation de la nouvelle API `inject()` pour obtenir les services dans les composants.
- Services typés et centralisés pour la gestion des données (ex : `DrinkService`).

**Exemple :**
```typescript
private drinkService = inject(DrinkService);
```

### 3. **Routing**
- Définition des routes dans un fichier dédié (`app.routes.ts`).
- Utilisation de `provideRouter(routes)` dans la config.
- Navigation dynamique avec `[routerLink]` et récupération des paramètres via `ActivatedRoute`.

**Exemple :**
```typescript
this.activatedRoute.paramMap.subscribe(paramMap => {
  const drinkId = paramMap.get('drinkId');
});
```

### 4. **Pipes personnalisés**
- Création d'un pipe pour transformer les catégories de boissons en labels lisibles.

**Exemple :**
```typescript
@Pipe({ name: 'drinkCategoryLabel', standalone: true })
export class DrinkCategoryLabelPipe implements PipeTransform { ... }
```

### 5. **Interceptors HTTP**
- Gestion centralisée des erreurs HTTP (ex : redirection automatique en cas de 404).
- Utilisation de la nouvelle API `withInterceptors` dans la config.

**Exemple :**
```typescript
export const notFoundInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  return next(req).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse && error.status === 404) {
        router.navigate(['/not-found']);
      }
      return throwError(() => error);
    })
  );
};
```

### 6. **Formulaires réactifs**
- Utilisation de `FormGroup`, `FormControl` et des validators pour créer des formulaires dynamiques et typés.

**Exemple :**
```typescript
formGroup = new FormGroup({
  name: new FormControl<string>('', [Validators.required]),
  price: new FormControl<number>(0, [Validators.required]),
  ...
});
```

### 7. **Gestion des assets et du mock backend**
- Images stockées dans `public/drinks/`
- Backend simulé avec `json-server` et le fichier `db.json`

---

## Structure du projet

```
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── drink-list/
│   │   │   ├── drink-details/
│   │   │   ├── drink-card/
│   │   │   ├── admin-drink-form/
│   │   │   ├── services/
│   │   │   ├── pipes/
│   │   │   ├── models/
│   │   │   ├── app.routes.ts
│   │   │   ├── app.config.ts
│   │   │   ├── app.module.ts
│   │   │   └── app.component.ts
│   │   ├── assets/
│   │   ├── styles.scss
│   │   └── app.module.ts
│   ├── public/
│   │   ├── drinks/
│   │   ├── logo.jpg
│   │   ├── fonts/
│   │   └── index.html
│   └── db.json
```

---

## Lancer l'application

1. **Installer les dépendances**
```bash
npm install
```

2. **Lancer le backend mock (json-server)**
```bash
npm run start-json-server
```

3. **Lancer l'application Angular**
```bash
npm start
```

- L'application sera accessible sur [http://localhost:4200](http://localhost:4200)
- L'API mock sur [http://localhost:3000/drinks](http://localhost:3000/drinks)

---

## Points pédagogiques
- Standalone components et configuration moderne
- Injection de dépendances avec `inject()`
- Routing dynamique et navigation
- Gestion des erreurs HTTP avec interceptor
- Formulaires réactifs et validation
- Utilisation d'un backend mock pour le développement
- Organisation et structuration d'un projet Angular moderne

---

## Pour aller plus loin
- [Documentation officielle Angular](https://angular.dev/overview)
- [RxJS - Programmation réactive](https://rxjs.dev/)
- [json-server](https://github.com/typicode/json-server)

---

**Projet réalisé dans le cadre de mon apprentissage d'Angular 20+ en suivant la formation de Gaëtan Rouziès et des bonnes pratiques modernes.**
