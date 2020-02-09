import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { ActivityScreenComponent } from './activity-screen/activity-screen.component';
import { UserScreenComponent } from './user-screen/user-screen.component';
import { SubjectScreenComponent } from './subject-screen/subject-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { ForumComponent } from './forum/forum.component';
import { ActivityDetailsComponent } from './activity-screen/activity-details/activity-details.component';


const routes: Routes = [
  {path:'', component:LoginScreenComponent},
  {path:'cadastro', component:RegisterScreenComponent},
  {path:'home', component:UserScreenComponent},
  {path:'atividade', component:ActivityDetailsComponent},
  {path:'materia', component:SubjectScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
