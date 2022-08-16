import { produtos, IProduto } from './produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  constructor() { }
  produtos: IProduto[] = produtos;

  geAll() {
    return this.produtos;
  }

  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id === produtoId);
  }
}
