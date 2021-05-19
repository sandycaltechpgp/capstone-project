import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/Model/address';
import { ApiService } from 'src/app/Service/api.service';
import { Router } from '@angular/router';
import { AddCategory } from 'src/app/Model/AddCategory';


@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrls: ['./addcat.component.css']
})
export class AddCatComponent implements OnInit {

  private cpForm: any;
  model: AddCategory = {
    categoryName: ''
  };
  constructor(private api: ApiService, private route: Router) { }

  ngOnInit() {
    this.api.getAddress().subscribe(res => {
      if (res.map != null) {
        this.model = res.map;
      }
    }, err => {
      console.log(err);
    });
  }

  addCategory() {

    this.api.addCategory(this.model).subscribe(res => {
      console.log(res);
      this.route.navigate(['/admin']);
    });
  }

  
}
