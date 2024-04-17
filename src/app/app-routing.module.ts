import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

//localhost:4200/products
const routes: Routes = [
{path:'products', component: ProductListComponent},
{path:'', redirectTo: 'products', pathMatch: 'full'},
{path: 'addProduct', component: AddProductComponent},
{path: 'updateProduct/:id', component: UpdateProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
