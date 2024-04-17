import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',

})
export class ProductListComponent {
  //Declaramos la variable productos que sera un arreglo de producto
  products: Product[]

  constructor(private productService: ProductService, private route: Router){}
  ngOnInit(){// cargamos los productos
    this.getProducts();

  }

  private getProducts(){
    // consumimos los datos del observable del paq servicio
    //hacemos funcion lamda luego del subscribe asignando al arreglo productos toda la data
    this.productService.getProductList().subscribe((data=>{ this.products= data; }) );
  }

  updateProduct(id: number){
    this.route.navigate(['/updateProduct', id])
  }

  deleteProduct(id: number){
    this.productService.removeProduct(id).subscribe(
      {
        next:(date)=> this.getProducts(),
        error: (errors)=> console.log(errors)
      }
    )

  }

}
