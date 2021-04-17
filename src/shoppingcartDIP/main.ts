/*
 Módulos de alto nivel nao devem depender de modulos de baixo nivel. Ambos devem depender de abstrações
 Dependa de abstrações e não de implementações
 Abstrações nao devem depender de detalhes. Detalhes devem depender de abstrações

 Classes de baixo nivel sao classes que executam tarefas(detalhes)
 Classes de alton nivel sao classes que gerencial as classes de baixo nivel
*/
import { Message } from './services/message';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart-DIP';
import { FiftyPercentDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';
import { MessageProtocol } from './classes/interfaces/message-protocol';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const message = new Message();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Alexandre',
  'Kimura',
  '11111111111',
);

//Exemplo de teste e não dá classe Message em si - Simulação
/*class MessageMock implements MessageProtocol {
  sendMessage(): void {
    console.log('A mensagem foi enviada pelo MOCK');
  }
}

const messageMock = new MessageMock();
*/

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
