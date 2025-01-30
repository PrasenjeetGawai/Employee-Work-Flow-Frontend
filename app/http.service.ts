import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string='http://localhost:8080/employeeApi/'
  
  baseUrl2:string='http://localhost:8080/countryApi/'

  baseUrl3:string='http://localhost:8080/registerApi/'

  constructor(private http:HttpClient) { }

  getAllEmp(){
   return (this.http.get(`${this.baseUrl}getAll`));
  }

  getEmpById(id:any){
   return (this.http.get(`${this.baseUrl}getById/${id}`))
  }

  getAllCountryData(){
   return( this.http.get(`${this.baseUrl2}getAllCountry`))
  }

  postEmpData(obj : any){
    return (this.http.post(`${this.baseUrl}addrecord`,obj,{
      responseType:'text'
    }))
  }

  updateEmpData(obj:any){
    return (this.http.put(`${this.baseUrl}updaterecord/${obj.id}`,obj,{
      responseType:'text'
    }));
  }

  deleteEmpData(id:any){
   return (this.http.delete(`${this.baseUrl}deleterecord/${id}`,{
    responseType:'text'
   }))
  }

  postRegisterData(obj:any){
    return (this.http.post(`${this.baseUrl3}userRegister`,obj,{
      responseType:"text"
    }))
  }

  postUserLogin(obj:any){

  return  (this.http.post(`${this.baseUrl3}userlogin`,obj))
  }

}
