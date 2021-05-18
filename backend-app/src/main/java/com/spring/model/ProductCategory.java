package com.spring.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "ProductCategory")
public class ProductCategory implements Serializable {

    private static final long serialVersionUID = -7446162716367848301L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productcatid;
    private String description;
    private String productcatname;

    public ProductCategory() {
        super();
    }

    public ProductCategory(String description, String productcatname) {
        super();
        this.description = description;
        this.productcatname = productcatname;
    }

    public int getProductcatid() {
        return productcatid;
    }

    public void setProductcatid(int productcatid) {
        this.productcatid = productcatid;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProductcatname() {
        return productcatname;
    }

    public void setProductcatname(String productcatname) {
        this.productcatname = productcatname;
    }
}