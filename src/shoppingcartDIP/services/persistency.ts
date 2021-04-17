import { PersistencyProtocol } from '../classes/interfaces/persistenct-protocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log(`Pedido salvo com sucesso!`);
  }
}
