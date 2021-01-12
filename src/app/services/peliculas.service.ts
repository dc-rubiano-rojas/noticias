import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { RespuestaTopHeadlines } from '../Interfaces/interfaces';
import { Observable } from 'rxjs';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  headlinesPage = 0;
  categoriaActual = '';
  categoriaPage = 0;

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string): Observable<any>{
    // <T> es generico le estoy diciendo que el tipo de lo que reciba
    // va a ser lo mismo de lo que devuelva
      query = apiUrl + query;
      return this.http.get<T>(query, { headers });
      // return this.http.get<T>(query);
  }

  getTopHeadlines(pagina: string): Observable<any>{
    // this.headlinesPage ++;
    // console.log(this.headlinesPage);
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&page=${pagina}`);
  }


  getTopHeadlinesCategoria(categoria: string): Observable<any>{

    // Esto se usa para infiniti scroll
    if (this.categoriaActual === categoria){
        this.categoriaPage++;
    }else{
      this.categoriaPage = 1;
      this.categoriaActual = categoria;
    }

    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${categoria}&page=${this.categoriaPage}`);
  }

}
