import { Message } from './services/message';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart-SRP';

const shoppingCart = new ShoppingCart();
const message = new Message();
const persistency = new Persistency();
const order = new Order(shoppingCart, message, persistency);
shoppingCart.addItem(new Product('Camiseta', 49.922));
shoppingCart.addItem(new Product('Camise', 19.91));
shoppingCart.addItem(new Product('Bermuda', 89.93));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
