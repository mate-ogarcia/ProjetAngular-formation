export interface Drink {
  id?: string;
  name: string;
  price: number;
  description: string;
  category: DrinkCategory;
  image: string;
}

export type DrinkCategory = 'sweet' | 'low-sugar' | 'no-sugar';