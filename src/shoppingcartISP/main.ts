/*
 Principio da segregação de interface
 Os clientes nao devem ser forçados a depender de interfaces que nao utilizam
*/
import { Message } from './services/message';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart-ISP';
import { FiftyPercentDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const message = new Message();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Alexandre',
  'Kimura',
  '11111111111',
);
//const enterpriseCustomer = new EnterpriseCustomer('Alexandre', '11111111111');
const order = new Order(shoppingCart, message, persistency, individualCustomer);
shoppingCart.addItem(new Product('Camiseta', 49.922));
shoppingCart.addItem(new Product('Camise', 19.91));
shoppingCart.addItem(new Product('Bermuda', 89.93));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
