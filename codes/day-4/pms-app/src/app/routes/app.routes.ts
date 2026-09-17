import { Routes } from '@angular/router';
import { ProductContainer } from '../modules/products/components/product-container/product-container';
import { ProductDetails } from '../modules/products/components/product-details/product-details';
import { EditProduct } from '../modules/products/components/edit-product/edit-product';
import { AddProduct } from '../modules/products/components/add-product/add-product';
import { Home } from '../modules/shared/components/home/home';
import { PageNotFound } from '../modules/shared/components/page-not-found/page-not-found';

// export const routes: Routes = [
//     { path: 'products', component: ProductContainer },
//     { path: 'products/view/:id', component: ProductDetails },
//     { path: 'products/edit', component: EditProduct },
//     { path: 'products/add', component: AddProduct }
// ];

export const routes: Routes = [
    {
        path: 'products',
        children: [
            { path: '', component: ProductContainer },
            { path: 'view/:id', component: ProductDetails },
            { path: 'edit', component: EditProduct },
            { path: 'add', component: AddProduct }
        ]
    },
    {
        path: 'home', component: Home
    },
    {
        path: '', pathMatch: 'full', redirectTo: '/home'
    },
    {
        path: '**', component: PageNotFound
    }
];
