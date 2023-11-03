import { CartItem } from './CartItem';

export class Cart {
  items: CartItem[] = [];

  // get each items price and add it to totalPrice
  get totalPrice(): number {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.price;
    });
    return totalPrice;
  }
}
