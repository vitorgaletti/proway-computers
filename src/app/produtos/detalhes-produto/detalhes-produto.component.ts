import { CarrinhoService } from './../../carrinho.service';
import { NotificacaoService } from './../../notificacao.service';
import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css'],
})
export class DetalhesProdutoComponent implements OnInit {
  constructor(
    private produtosService: ProdutosService,
    private router: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) {}

  produto: IProduto | undefined;
  quantidade = 1;

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    const produtoId = Number(routeParams.get('id'));
    this.produto = this.produtosService.getOne(produtoId);
  }

  adicionarAoCarrinho() {
    this.notificacaoService.notificar('O produto foi adicionado ao carrinho');
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade,
    };

    this.carrinhoService.adicionarAoCarrinho(produto);
  }
}
