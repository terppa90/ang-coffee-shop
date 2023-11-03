import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product/product.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  product!: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {
    // Listen to the route parameters
    activatedRoute.params.subscribe((params) => {
      // IF params id is available
      if (params['id'])
        // get the product by id
        this['product'] = productService.getProductById(params['id']);
    });
  }

  ngOnInit(): void {}
  // Method that will be invoked when button is pressed
  addToCart() {
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page');
  }
}
