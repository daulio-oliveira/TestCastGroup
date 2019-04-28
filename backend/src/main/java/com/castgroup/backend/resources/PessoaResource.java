package com.castgroup.backend.resources;

import java.util.ArrayList;

import javax.validation.Valid;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.castgroup.backend.models.Pessoa;
import com.castgroup.backend.repository.PessoaRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;



@Api(value="API REST Pessoas")
@RestController
@RequestMapping("/pessoa")
public class PessoaResource {

	@Autowired
	private PessoaRepository pr;
	
	@ApiOperation(value="Retorna uma lista de Pessoas")
	@GetMapping(produces="application/json")
	public @ResponseBody Iterable<Pessoa> listaPessoas() {
		Iterable<Pessoa> listaPessoas = pr.findAll();
		ArrayList<Pessoa> pessoas = new ArrayList<Pessoa>();
		for(Pessoa pessoa : listaPessoas){
			long codigo = pessoa.getCodigo();
			pessoa.add(linkTo(methodOn(PessoaResource.class).pessoa(codigo)).withSelfRel());
			pessoas.add(pessoa);
		}
		return pessoas;
	}
	
	@ApiOperation(value="Retorna uma pessoa específica")
	@GetMapping(value="/{codigo}", produces="application/json")
	public @ResponseBody Pessoa pessoa(@PathVariable(value="codigo") long codigo){
		Pessoa pessoa = pr.findByCodigo(codigo);
		pessoa.add(linkTo(methodOn(PessoaResource.class).listaPessoas()).withRel("Lista de Pessoas"));
		return pessoa;
	}

	@ApiOperation(value="Salva uma pessoa")
	@PostMapping(value = "/cadastro", produces="application/json", consumes="application/json")
	public Pessoa cadastraPessoa(@RequestBody Pessoa pessoa) {
		pr.save(pessoa);
		long codigo = pessoa.getCodigo();
		pessoa.add(linkTo(methodOn(PessoaResource.class).pessoa(codigo)).withSelfRel());
		return pessoa;
	}
	
	@ApiOperation(value="Deleta uma pessoa")
	@DeleteMapping(value = "/delete/{codigo}", produces="application/json")
	public boolean deletePessoa(@PathVariable(value="codigo") long codigo) {
		try {
			Pessoa pessoa = pr.findByCodigo(codigo);
			pr.delete(pessoa);
			return true;
		}catch (Exception e) {
			System.err.println("Error:"+ e.getMessage());
		}
		return false;
	}
}
