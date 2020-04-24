// import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(  private authService: AuthService , private router: Router) { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),

  })

  enterLogin(value){
    this.authService.loginUser(value)  
     .then(() =>{
       this.router.navigate(['/home']);
     })
  }
  

}
