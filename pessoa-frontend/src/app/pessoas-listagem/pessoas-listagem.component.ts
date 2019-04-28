import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../models/pessoa';
import { Observable, empty, Subject} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-pessoas-listagem',
  templateUrl: './pessoas-listagem.component.html',
  styleUrls: ['./pessoas-listagem.component.scss']
})
export class PessoasListagemComponent implements OnInit {

  pessoas$: Observable<Pessoa[]>;
  error$ = new Subject<boolean>();
    
  constructor(private pessoaService: PessoaService,
    private router: Router, private route: ActivatedRoute
    ) { }

  
  ngOnInit() {
    this.onRefresh();
  }

  onRefresh(){
    this.pessoas$ = this.pessoaService.listar()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true)
        return empty();
      })
    );
  }

  onEdit(codigo){
    this.router.navigate(['editar',codigo], { relativeTo: this.route});
  }

  onDelete(pessoa){
    this.pessoaService.delete(pessoa.codigo).subscribe(
      sucess => this.onRefresh(),
      error => console.error(error)
    );
  }
}
