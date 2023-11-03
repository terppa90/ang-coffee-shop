import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Product } from 'src/app/shared/models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();

  // Create cartItem property, and add id that matches (parameter id and cart item id)
  addToCart(product: Product): void {
    let cartItem = this.cart.items.find(
      (item) => item.product.id === product.id
    );
    // IF cartItem is not null or undefined, change quantity
    if (cartItem) {
      this.changeQuantity(product.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(product));
  }

  // Keep everything except productId
  removeFromCart(productId: number): void {
    this.cart.items = this.cart.items.filter(
      (item) => item.product.id != productId
    );
  }

  changeQuantity(productId: number, quantity: number) {
    // Find cart item based on the product id
    let cartItem = this.cart.items.find(
      (item) => item.product.id === productId
    );
    // If null or undefined, return, because we don't want to do anything
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}
