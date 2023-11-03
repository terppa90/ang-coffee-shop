import { Product } from './Product';

export class CartItem {
  constructor(product: Product) {
    // product property
    this.product = product;
  }
  product: Product;
  // quantity property
  quantity: number = 1;
  // getter
  get price(): number {
    return this.product.price * this.quantity;
  }
}
