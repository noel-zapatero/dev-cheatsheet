import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home-container/home-container.component';
import { LangContainerComponent } from './lang-container/lang-container.component';
import { SoftwareContainerComponent } from './software-container/software-container.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'lang/:lang', component: LangContainerComponent },
  { path: 'software', component: SoftwareContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
