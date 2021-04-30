import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "resume", component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
