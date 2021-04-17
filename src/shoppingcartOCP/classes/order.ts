import { ShoppingCart } from './shopping-cart-OCP';
import { OrderStatus } from './interfaces/order-status';
import { Message } from '../services/message';
import { Persistency } from '../services/persistency';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Message,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }

    this._orderStatus = 'closed';
    this.message.sendMessage(
      `Seu pedido com total de  ${this.cart.totalWithDiscount()} feito  foi recebido.`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
