import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Article } from '../../Interfaces/interfaces';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  noticias: Article[] = [];
  noticiasLatests: Article[] = [];

  constructor(private peliculasService: PeliculasService,
              public router: Router) { }

  ngOnInit(): void {
    this.peliculasService.getTopHeadlines('2').subscribe( res => {
      this.noticias = res.articles;
      this.noticiasLatests = this.noticias.slice(0, 4);
      console.log(this.noticiasLatests);
    });

  }

  enviarNoticia(noticia: any): void {

    // localStorage.removeItem('noticia');
    // localStorage.setItem('noticia', JSON.stringify(noticia));
    // this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then( () =>
    // this.router.navigate([`/new/${noticia.title}`]));
    // window.location.href = noticia.url;
    window.open(noticia.url, "_blank");
  }

}
