import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empData:any[]=[];
  id!:any;

  isRadioClick:boolean=false;

  constructor(private service:HttpService,
    private router:Router
  ){}
  
  ngOnInit(): void {
    this.getDataFromBackend();
  }

  getDataFromBackend(){
    this.service.getAllEmp()
    .subscribe((response:any)=>{
      console.log(response);
      this.empData=response;
    })
  }

  onRadioClick(id : any){
    this.isRadioClick=true;
    this.id=id;
  }

  onUpdate(){
    if (this.isRadioClick){

      this.router.navigate(['updateEmp',this.id])

    }else{
      alert("please select employee to be updated..")
    }
  }

  onDelete(){
    if (this.isRadioClick){

      this.service.deleteEmpData(this.id)
      .subscribe((response)=>{
        this.getDataFromBackend();
      })

    }else{
      alert("please select employee to be deleted..")
    }
  }

}
