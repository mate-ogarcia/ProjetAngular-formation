import { Pipe, PipeTransform } from '@angular/core';
import { DrinkCategory } from '../models/drink.model';

@Pipe({
  name: 'drinkCategoryLabel'
})
export class DrinkCategoryLabelPipe implements PipeTransform {

  transform(category: DrinkCategory): string {

    switch (category) {
      case 'sweet':
        return 'Sweet';
      case 'low-sugar':
        return 'Low sugar';
      case 'no-sugar':
        return 'No sugar';
    }
  }

}
