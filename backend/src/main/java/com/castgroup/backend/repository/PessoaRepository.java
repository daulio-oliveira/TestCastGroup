package com.castgroup.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.castgroup.backend.models.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, String>{

	// Busca pessoa por código
	Pessoa findByCodigo(long codigo);
}
