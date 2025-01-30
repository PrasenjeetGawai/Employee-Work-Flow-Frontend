import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path:"home",component:HomeComponent
  },

  {
    path:"",component:LoginComponent
  },
  {
    path:"register",component:RegisterComponent
  },
 
  {
    path:"home/addemp",component:AddemployeeComponent
  },
  {
    path:"home/details/:id",component:DetailsComponent
  },
  {
    path:"updateEmp/:id",component:AddemployeeComponent
  },
  {
    path:"**",component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
