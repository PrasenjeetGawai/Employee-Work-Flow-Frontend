import { Component, OnInit } from '@angular/core';
import { Register } from '../model/register';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sendData:any=<Register>{};
  getData:any=<Register>{};



  constructor(private service:HttpService,
    private router:Router
  ){}


  ngOnInit(): void {
   
  }
  

  onLogin(f:NgForm) {

    let jsonObj={
      email:f.value.email,
      password:f.value.password
    }

    this.service.postUserLogin(jsonObj)
    .subscribe((response:any)=>{
      console.log(response)
      if (response.msg=="Valid user"){
        this.router.navigate(['home'])
        alert("Login Successfully....!")
      }else{
        this.router.navigate([''])
        alert("Enter correct email and password....!")
      }
    })

  }

}
