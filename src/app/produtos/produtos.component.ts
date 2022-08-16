import { ProdutosService } from './../produtos.service';
import { IProduto } from './../produtos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute
  ) {}

  produtos: IProduto[] | undefined;

  ngOnInit(): void {
    const produtos = this.produtoService.geAll();
    this.route.queryParamMap.subscribe((params) => {
      const descricao = params.get('descricao')?.toLowerCase();

      if (descricao) {
        this.produtos = produtos.filter((produto) =>
          produto.descricao.toLowerCase().includes(descricao)
        );
        return;
      }

      this.produtos = produtos;
    });
  }
}
