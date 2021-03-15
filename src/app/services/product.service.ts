import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductAllergen } from '../models/product-allergen';
import { ProductCategory } from '../models/product-category';
import { ProductListItem } from '../models/product-list-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /**
   * Ez itt több komponens között is szinkronizálva van, szóval Subject-ként használom, a komponensek meg feliratkoznak a változásaira
   */
  readonly productCategories: BehaviorSubject<ProductCategory[]> = new BehaviorSubject<ProductCategory[]>(null);

  constructor(private http: HttpClient) { }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`/products/get/${productId}`);
  }

  getAllergens(): Observable<ProductAllergen[]> {
    return this.http.get<ProductAllergen[]>('/general/allergens/list');
  }

  fetchCategories() {
    this.http.get<ProductCategory[]>('/products/categories/list').subscribe(resp => {
      this.productCategories.next(resp);
    });
  }

  saveCategory(categoryName: string): Observable<any> {
    return this.http.post<any>('/products/categories/save', { categoryName });
  }

  saveProduct(product: Product, productImage: File = null): Observable<any> {
    const data = new FormData();
    data.append('product', JSON.stringify(product));

    if (productImage) {
      data.append('productImage', productImage);
    }

    return this.http.post('/products/save', data);
  }

  getProductList(filterText: string = null, categoryId: number = null): Observable<ProductListItem[]> {
    return this.http.get<ProductListItem[]>(`/products/list?filterText=${filterText || ''}&categoryId=${categoryId || ''}`);
  }
}
