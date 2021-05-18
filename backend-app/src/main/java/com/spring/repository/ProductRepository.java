package com.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.spring.model.Product;

@Repository
@Transactional
public interface ProductRepository extends JpaRepository<Product, Long> {

	Product findByProductid(int productid);

	void deleteByProductid(int productid);

	List<Product> findAll();

	@Query("from Product where productname like %?1%")
	List<Product> search(String search);

	@Query("from Product where catid=?1")
	List<Product> searchByCatid(int catid);

}
