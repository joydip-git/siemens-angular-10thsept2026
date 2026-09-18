import { Routes } from '@angular/router';
import { ProductContainer } from '../modules/products/components/product-container/product-container';
import { ProductDetails } from '../modules/products/components/product-details/product-details';
import { EditProduct } from '../modules/products/components/edit-product/edit-product';
import { AddProduct } from '../modules/products/components/add-product/add-product';
import { Home } from '../modules/shared/components/home/home';
import { PageNotFound } from '../modules/shared/components/page-not-found/page-not-found';
import { Login } from '../modules/auth/components/login/login';
import { Register } from '../modules/auth/components/register/register';

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
        path: 'login', component: Login
    },
    {
        path: 'register', component: Register
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
