import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  // return type: Product
  getProductById(id: number): Product {
    return this.getAll().find((product) => product.id == id)!; // ! is for the reason that return is not undefined
  }

  getAll(): Product[] {
    return [
      {
        id: 1,
        name: 'Coffee',
        price: 2,
        favorite: true,
        stars: 4.5,
        imageUrl: '/assets/images/products/coffee-1.png',
      },
      {
        id: 2,
        name: 'Tea',
        price: 3,
        favorite: true,
        stars: 3,
        imageUrl: '/assets/images/products/tea.png',
      },
      {
        id: 3,
        name: 'Cappuccino',
        price: 3.5,
        favorite: false,
        stars: 4,
        imageUrl: '/assets/images/products/coffee-1.png',
      },
      {
        id: 4,
        name: 'Espresso',
        price: 3,
        favorite: false,
        stars: 2,
        imageUrl: '/assets/images/products/tea.png',
      },
    ];
  }

  // getAll() function that return an array of String
  // getAll(): String[] {
  //   return [
  //     '/assets/images/products/coffee-1.png',
  //     '/assets/images/products/coffee-2.png',
  //     '/assets/images/products/coffee-3.png',
  //     '/assets/images/products/coffee-4.png',
  //   ];
  // }
}
