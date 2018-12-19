import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import { ProductService } from './product.service';
@Component({
selector: 'app-products',
templateUrl: './product-list.component.html',
styleUrls: ['./product-list-component.css']

})
export class ProductListComponent implements OnInit {
    pageTitle = 'Book List';
    imageWidth = 30;
    imageMargin = 2;
    showImage = false;
    errorMessage = '' ;
    _listFilter: string;
    get listFilter(): string {
       return this._listFilter;
    }
    set listFilter(value) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products; // I am not understanding this line
   }
    filteredProducts: IProduct[];
    products: IProduct[] = [];
        constructor(private productService: ProductService) {


        }
        onRatingClicked(message): void {
          this.pageTitle = 'Book list: ' + message;
        }

    toggleImage(): void {
      this.showImage = !this.showImage;
    }
    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
      this.productService.getProducts().subscribe(
       products => {this.products = products;
       this.filteredProducts = this.products;
      },
       error => this.errorMessage = <any> error
      );

}
}

