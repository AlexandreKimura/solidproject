/*
 Liskov
 Subtipos precisam ser substituiveis por seus tipos de base
 Resumo: Se meu programa espera um Animal, algo do tipo Cachorro(que herda de Animal) deve servir como qualquer outro Animal
*/
import { Message } from './services/message';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart-LSP';
import { FiftyPercentDiscount } from './classes/discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const message = new Message();
const persistency = new Persistency();
const order = new Order(shoppingCart, message, persistency);
shoppingCart.addItem(new Product('Camiseta', 49.922));
shoppingCart.addItem(new Product('Camise', 19.91));
shoppingCart.addItem(new Product('Bermuda', 89.93));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
