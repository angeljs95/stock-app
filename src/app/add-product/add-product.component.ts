import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {

  product: Product = new Product();

  constructor (private productService: ProductService, private route: Router){};

  onSubmit(){
    this.saveProduct();
  }
// metodo para guardar producto
//cuando envie toda la data y se valide en vez de devolver los datos enviados queremos que redirecciones a /products
  saveProduct(){
    this.productService.addProduct(this.product).subscribe(
      { next: (data)=> {
        this.goProductList();
      }, error: (error: any) => { console.log(error) }
    }
        );
      }
// metodo tipo enrutador que redirige a la pag de inicio que lista los productos
      goProductList(){
        this.route.navigate(['/products'])

      }

}
