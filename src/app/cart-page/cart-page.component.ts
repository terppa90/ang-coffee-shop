import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }

  ngOnInit(): void {}

  // Remove the product from cart
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.product.id);
    this.setCart();
  }

  // change quantity, we need to change the string type to int (parseInt())
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }
}
