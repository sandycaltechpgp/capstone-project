package com.spring.response;

import com.spring.model.Product;
import com.spring.model.ProductCategory;

import java.util.List;

public class ProductCatResponse {
	private String status;
	private String message;
	private String AUTH_TOKEN;
	private List<ProductCategory> oblist;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getAUTH_TOKEN() {
		return AUTH_TOKEN;
	}

	public void setAUTH_TOKEN(String aUTH_TOKEN) {
		AUTH_TOKEN = aUTH_TOKEN;
	}

	public List<ProductCategory> getOblist() {
		return oblist;
	}

	public void setOblist(List<ProductCategory> oblist) {
		this.oblist = oblist;
	}

}