import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';


const el = document.querySelector('#dev-products');

const el2 = document.querySelector('#dev-cart');
productsMount(el);
cartMount(el2);