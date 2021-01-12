import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Article } from '../../Interfaces/interfaces';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private peliculasService: PeliculasService) { }

  noticias: Article[] = [];
  pagina = '1';

  ngOnInit(): void {
    this.cargarNoticias();
  }

  masNoticias(): void{
    this.pagina = '2';
    this.cargarNoticias();
    this.pagina = '1';
  }

  cargarNoticias(): void {
    this.peliculasService.getTopHeadlines(this.pagina).subscribe(res => {
      this.noticias.push(...res.articles);
    });
  }

  enviarAFuente(noticia: Article): void {
    window.open(noticia.url, "_blank");
    // window.location.href = noticia.url;
  }

}
