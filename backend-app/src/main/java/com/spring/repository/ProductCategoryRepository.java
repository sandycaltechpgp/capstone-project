package com.spring.repository;

import com.spring.model.Product;
import com.spring.model.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {

    ProductCategory findByProductcatid(int productcatid);

    void deleteByProductcatid(int productcatid);

    ProductCategory findByProductcatname(String categoryName);

    List<ProductCategory> findAll();

    @Query("from ProductCategory where productcatname like %?1%")
    List<ProductCategory> search(String search);
}
