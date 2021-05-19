import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from 'src/app/Model/product';
import {ApiService} from 'src/app/Service/api.service';
import {Productcat} from '../../../Model/productcat';

@Component({
    selector: 'app-edit-item',
    templateUrl: './edit-item.component.html',
    styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
    product: Product = {
        productid: 0,
        description: '',
        price: 0,
        productname: '',
        quantity: 0,
        productimage: null,
        category: 0
    };

    productsCat: Productcat[] = [];

    products: Product[] = [];
    fileToUpload: File = null;
    auth: string;
    prodid: string;
    imageUrl: string = "/assets/img/noimage.png";

    constructor(private route: ActivatedRoute, private api: ApiService) {
        if (this.api.isAuthenticated) {
            this.auth = this.api.getToken();
            this.api.getProducts().subscribe(
                res => {
                    res.oblist.forEach(pro => {
                        if (pro.productid == this.prodid) {
                            this.product = pro;
                            this.fileToUpload = pro.productimage;
                        }
                    });
                }
            );
        }
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.prodid = params["user"];
        });

        this.api.getProductsCats().subscribe(
            res => {
                this.productsCat = res.oblist;
            }
        );

    }

    handleFileInput(file: FileList) {
        this.fileToUpload = file.item(0);
        var reader = new FileReader();
        reader.onload = (event: any) => {
            this.imageUrl = event.target.result;
        }
        reader.readAsDataURL(this.fileToUpload);
    }


    updateProd(desc: any, quan: any, price: any, prodname: any, image: any, cat:any) {

        const e = (document.getElementById('category')) as HTMLSelectElement;
        cat = e.options[e.selectedIndex].value;
        console.log(cat);

        console.log(this.product.productid);

        this.api.updateProduct(desc.value, quan.value, price.value, prodname.value, this.fileToUpload, this.product.productid, cat).subscribe(res => {
            console.log(res);
        });

        document.location.href='/admin';
    }

}
