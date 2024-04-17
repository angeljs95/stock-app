import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',

})
export class UpdateProductComponent {
  
  product: Product = new Product();
  id:number

  constructor(private productService: ProductService, private routeActive: ActivatedRoute,
    private route:Router) {}

    ngOnInit(){ //obtenermos el valor del id de la routa
      this.id= this.routeActive.snapshot.params['id']
      this.productService.getProductById(this.id).subscribe(
        {
          next: (data)=> this.product= data,
          error: (errors:any)=> console.log(errors)
        }
      )
    }
    onSubmit(){

      this.updateProduct();

    }
    updateProduct(){
      this.productService.updateProduct(this.id,this.product).subscribe(
        {
          next:(data)=> this.goProductList(),
          error:(errors) => console.log(errors)
        }
      )
    }
    goProductList(){
      this.route.navigate(['/products']);
    }

  

}
