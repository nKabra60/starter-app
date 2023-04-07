// src/routes.ts

// pages
import Melee from "./pages/Melee";
import About from "./pages/About";
import Products from "./pages/Products";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'melee-route',
        title: 'Melee',
        path: '/Melee',
        enabled: true,
        component: Melee
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About
    },
    {
        key: 'products-route',
        title: 'Products',
        path: '/products',
        enabled: true,
        component: Products
    }
]