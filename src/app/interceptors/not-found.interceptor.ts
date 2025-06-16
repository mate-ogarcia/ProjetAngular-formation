import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';

export const notFoundInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 404) {
          router.navigate(['/not-found'], {skipLocationChange: true}); // skipLocationChange: true pour éviter de faire un appel à la route /not-found
        }
      }
      // return throwError(() => error);
      throw error;
    })
  );
};
