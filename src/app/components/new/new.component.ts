import { Component, OnInit } from '@angular/core';
import { Article } from '../../Interfaces/interfaces';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit{

  noticiaFiltrada: Article[] = [];
  noticia: any;
  noticiasLatests: Article[] = [];

  constructor(public peliculasService: PeliculasService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const noticiaLocal = localStorage.getItem('noticia') || '';
    this.noticia = JSON.parse(noticiaLocal);
    // localStorage.removeItem('noticia');
    // console.log(this.noticia);
  }


}
