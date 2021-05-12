import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiografiaComponent } from './pages/biografia/biografia.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "biografia", component: BiografiaComponent},
  {path: "resume", component: ResumeComponent},
  {path: "skills", component: SkillsComponent},
  {path: "proyectos", component: ProyectosComponent},
  {path: "contacto", component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
