import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { config } from 'rxjs/internal/config';
import { AddClientComponent } from 'src/app/components/add-client/add-client.component';
import { ClientDetailsComponent } from 'src/app/components/client-details/client-details.component';


const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'add-client', component:AddClientComponent},
  {path:'client/:id', component:ClientDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
