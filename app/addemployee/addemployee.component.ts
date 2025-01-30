import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  addData:any=<Employee>{};

  allCountry:any[]=[];

  isUpdated:boolean=false;


  constructor(private service : HttpService,
    private router : Router,
    private route :ActivatedRoute
  ){

  }

  onSubmit(){

    
      // Update the record

      this.addData.updatedBy='sumit';
      this.addData.updatedDate=Date.now();
      this.service.updateEmpData(this.addData)
      .subscribe((response)=>{
        this.router.navigate(['home']);
      })

  
       // Add the record

       this.addData.createdBy='sumit';
       this.addData.createdDate=Date.now();
       this.addData.updatedBy='sumit';
       this.addData.updatedDate=Date.now();
       console.log(this.addData)
   
       this.service.postEmpData(this.addData)
       .subscribe((response)=>{
         console.log(response);
         this.router.navigate(['home']);
       })

    
      

 
     

  }

  ngOnInit(): void {
    this.getCountryData();
    this.getDataFromUrl();
  }

  getCountryData(){
    this.service.getAllCountryData()
    .subscribe((response:any)=>{
      // console.log(response);
      this.allCountry=response;
    })
  }

  
  getDataFromUrl(){
    this.route.paramMap
    .subscribe((param)=>{
      // console.log(param.get("id"));
      this.isUpdated=true;
      this.getEmpIdFromBackend(param.get("id"));
      
    })
  }

  getEmpIdFromBackend(id :any){
    this.service.getEmpById(id)
    .subscribe((response)=>{
      // console.log(response);
      this.addData=response;
    })

  }

}
