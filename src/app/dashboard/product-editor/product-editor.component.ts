import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductAllergen } from 'src/app/models/product-allergen';
import { ProductCategory } from 'src/app/models/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {

  _productId: number = null;
  @Input()
  set productId(value) {
    this._productId = value;
    this.fetchProduct();
  }

  @Output('productSaved')
  productSavedEvent: EventEmitter<any> = new EventEmitter();

  product: Product = null;
  productImage: File = null;
  productAllergens: ProductAllergen[] = [];
  productCategories: ProductCategory[] = [];

  newCategoryName: string = null;

  constructor(
    private productService: ProductService,
    private toaster: ToastrService
    ) { }

  ngOnInit(): void {
    this.productService.productCategories.subscribe(categories => {
      this.productCategories = categories;
    });


    this.fetchAllergens();
    //this.productService.fetchCategories();
  }

  saveNewCategory() {
    if (!this.newCategoryName) {
      return;
    }

    this.productService.saveCategory(this.newCategoryName).subscribe(resp => {
      if (resp.status === true) {
        this.productService.fetchCategories();
        this.newCategoryName = '';
        this.toaster.success('Kategória mentése sikeres!');
        return;
      }

      this.toaster.error(resp.message || 'Hiba történt!');
    })
  }

  saveProduct() {
    this.productService.saveProduct(this.product, this.productImage).subscribe(resp => {
      if (resp.status) {
        this.toaster.success('Termék mentése sikeres!');
        this.productSavedEvent.emit(true);
        return;
      }

      this.toaster.error(resp.message);
    });
  }

  productImageSelected(files) {
    this.productImage = files[0];
  }

  fetchProduct() {
    this.productImage = null;
    if (this._productId == -1) {
      this.product = new Product();
      return;
    }

    this.productService.getProduct(this._productId).subscribe(product => {
      this.product = product;
    })
  }

  fetchAllergens() {
    this.productService.getAllergens().subscribe(allergens => {
      this.productAllergens = allergens;
    })
  }

}
