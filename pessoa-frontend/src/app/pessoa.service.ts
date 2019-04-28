import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from './models/pessoa';
import {tap, take} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly API = '/api/pessoa';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Pessoa[]>(this.API)
    .pipe( 
      tap(console.log)
    );
  }

  loadByID(codigo){
    return this.http.get(`${this.API}/${codigo}`)
    .pipe(
      take(1)
    );
  }

  create(pessoa){
    return this.http.post(`${this.API}/cadastro`,pessoa)
    .pipe(
      take(1)
    );
  }

  delete(codigo){
    return this.http.delete(`${this.API}/delete/${codigo}`).pipe(take(1));
  }
 
}
