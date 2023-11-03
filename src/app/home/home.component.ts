import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { Product } from '../shared/models/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // products property of type Product[]
  products: Product[] = [];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  // Use the route parameters to get the searchTerm and filter out the ones
  // that match the product name
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm'])
        this.products = this.productService
          .getAll()
          .filter((product) =>
            product.name
              .toLowerCase()
              .includes(params['searchTerm'].toLowerCase())
          );
      else this.products = this.productService.getAll();
    });
  }
}

/*
A Constructor is a special method that is automatically called when an 
instance of a class is created. It initializes the properties of the class 
and does any other necessary setup. In Angular, constructors are used to 
inject dependencies, such as services or other components, into a component.
*/

/*
ngOnInit: ngOnInit is a lifecycle hook in Angular that is called after the 
constructor is called and after the component’s inputs have been initialized. 
It is used to perform any additional initialization that is required for the 
component. ngOnInit is commonly used to call services or to set up 
subscriptions.
*/
