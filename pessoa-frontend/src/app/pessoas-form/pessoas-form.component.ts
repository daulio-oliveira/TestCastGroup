import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PessoaService } from '../pessoa.service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoas-form',
  templateUrl: './pessoas-form.component.html',
  styleUrls: ['./pessoas-form.component.scss']
})
export class PessoasFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: PessoaService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:any) => {
        const id = params['id'];
        console.log(id);
        const pessoa$ = this.service.loadByID(id);
        pessoa$.subscribe( pessoa =>{
          this.updateForm(pessoa);
        });
      }
    );

    this.form = this.fb.group({
      codigo: [null],
      nome: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      street:  [null],
      number:  [null],
      bairro:  [null],
      cidade:  [null],
      state:  [null],
      celefone:  [null],
      telefone:  [null]
    });
  }

  updateForm(pessoa){
    this.form.patchValue({
      codigo: pessoa.codigo,
      nome: pessoa.nome,
      street: pessoa.street,
      number: pessoa.number,
      bairro: pessoa.bairro,
      cidade: pessoa.cidade,
      state: pessoa.state,
      celefone: pessoa.celefone,
      telefone: pessoa.telefone
    });
  }

  hasError(field: string){
    return this.form.get(field).errors;
  }
  
  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        success =>{
          console.log('sucesso');
          this.location.back();
        },
        error => console.error(error),
        () => console.log('request completo')
      );
    }
  }

  onCancel(){
    this.submitted = false;
    //this.form.reset();
    this.location.back();
  }
}
