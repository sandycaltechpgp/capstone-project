import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/app/Service/api.service';
import {Product} from 'src/app/Model/product';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {NavigationExtras, Router} from '@angular/router';
import {Route} from '@angular/compiler/src/core';
import {Productcat} from '../../Model/productcat';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    products: Product[] = [];
    productsCat: Productcat[] = [];
    fileToUpload: File = null;
    showAdd = false;
    auth: string;
    cat: string;

    constructor(private api: ApiService, private router: Router) {
    }

    imageUrl: string = "/assets/img/noimage.png";

    ngOnInit() {
        if (this.api.isAuthenticated) {
            this.auth = this.api.getToken();
            this.api.getProducts().subscribe(
                res => {
                    this.products = res.oblist;
                }
            );

            this.api.getProductsCats().subscribe(
                res => {
                    this.productsCat = res.oblist;
                }
            );
        }
    }




    handleFileInput(file: FileList) {
        this.fileToUpload = file.item(0);
        var reader = new FileReader();
        reader.onload = (event: any) => {
            this.imageUrl = event.target.result;
        }
        reader.readAsDataURL(this.fileToUpload);
    }

    show() {
        this.showAdd = true;
    }

    hide() {
        this.showAdd = false;
    }


    getSearchResultsByCategory(value) {
        if (this.api.isAuthenticated) {
            this.api.getSearchCategories(value).subscribe(
                res => {
                    this.products = res.oblist;
                }
            );
            return false;
        }
    }

    openNav() {
        document.getElementById('mySidenav').style.width = '250px';
        document.getElementById('main').style.marginLeft = '250px';
    }

    closeNav() {
        document.getElementById('mySidenav').style.width = '0';
        return false;
    }

    catchange(value){
        console.log('category');
        console.log(value);
        this.cat = value;
    }


    addProd(desc: any, quan: any, price: any, prodname: any, image: any,category: any) {
        category = this.cat;
        console.log(category);

        var e = document.getElementById("category");
        category =e.options[e.selectedIndex].value;
        console.log(category);

        this.api.addProduct(desc.value, quan.value, price.value, prodname.value, this.fileToUpload,category).subscribe(res => {
            this.products = res.oblist;
        });
    }

    delProd(prodid: any) {

        this.api.deleteProduct(prodid.value).subscribe(res => {
            this.products = res.oblist;
            this.ngOnInit();
        });

    }

    edit(prodid: any) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "user": prodid.value
            }
        };
        this.router.navigate(["admin/edit"], navigationExtras);
    }


}
