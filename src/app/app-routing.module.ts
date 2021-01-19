import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LangContainerComponent } from './lang-container/lang-container.component';

const routes: Routes = [
  { path: 'lang/:lang', component: LangContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
