import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Article } from '../../Interfaces/interfaces';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  category = '';
  articles: Article[] = [];

  constructor(private peliculasService: PeliculasService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( categoria => {
      this.category = categoria.category;

      this.peliculasService.getTopHeadlinesCategoria(this.category).subscribe(res => {
          this.articles = res.articles;
      });
    });
  }

  enviarAFuente(noticia: Article): void {
    window.open(noticia.url, "_blank");
    // window.location.href = noticia.url;
  }

}
