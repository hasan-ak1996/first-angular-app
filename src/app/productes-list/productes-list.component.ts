import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'products-list',
  templateUrl: './productes-list.component.html',
  styleUrls: ['./productes-list.component.css']
})
export class ProductesListComponent implements OnInit {
  @Input() productList :Product[];
  @Output() onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;
  constructor() { 
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }
  clicked(product :Product) :void{
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }
  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

}
