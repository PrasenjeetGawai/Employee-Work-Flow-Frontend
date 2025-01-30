import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { Register } from '../model/register';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 userData:any=<Register>{};

  constructor(private service:HttpService,
    private router:Router
  ){}


  ngOnInit(): void {

  }


  onRegister() {
    console.log(this.userData);
  
      this.service.postRegisterData(this.userData)
      .subscribe((response)=>{
        this.router.navigate(['']);
        alert("Register Successfully...");
      })
  }


}
