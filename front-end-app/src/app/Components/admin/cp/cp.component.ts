import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/Model/address';
import { ApiService } from 'src/app/Service/api.service';
import { Router } from '@angular/router';
import { ChangePassword } from 'src/app/Model/changePassword';


@Component({
  selector: 'app-cp',
  templateUrl: './cp.component.html',
  styleUrls: ['./cp.component.css']
})
export class ChangePasswordComponent implements OnInit {

  private cpForm: any;
  model: ChangePassword = {
    oldPassword: '',
    newPassword: '',
    rnewPassword: ''
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

  changePassword() {
    if(this.model.newPassword != this.model.rnewPassword){
      alert("New Passwords doesnt match ")
      return 
    }

    this.api.changePassword(this.model).subscribe(res => {
      console.log(res);
      this.route.navigate(['/home']);
    });
  }

  
}
