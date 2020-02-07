import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { ActivityScreenComponent } from './activity-screen/activity-screen.component';
import { UserScreenComponent } from './user-screen/user-screen.component';
import { SubjectScreenComponent } from './subject-screen/subject-screen.component';


const routes: Routes = [
  {path:'', component:LoginScreenComponent},
  {path:'home', component:UserScreenComponent},
  {path:'atividade', component:ActivityScreenComponent},
  {path:'materia', component:SubjectScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
