package com.spring.model;

public class AddCategory {
    private String categoryName ="";

    public AddCategory() {
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public AddCategory(String category) {
        this.categoryName = category;
    }
}
