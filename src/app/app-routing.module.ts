import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { ActivityScreenComponent } from './activity-screen/activity-screen.component';
import { UserScreenComponent } from './user-screen/user-screen.component';


const routes: Routes = [
  {path:'login', component:LoginScreenComponent},
  {path:'home', component:UserScreenComponent},
  {path:'atividade', component:ActivityScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
