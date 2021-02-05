import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LangContainerComponent } from './lang-container/lang-container.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dev-cheatsheet';

  constructor(private router: Router){}

  languages = [
    {
      name: 'Java'
    },
    {
      name: 'Python'
    },
    {
      name: 'Ruby'
    }
  ]

  navigateLang(lang: string){
    this.router.navigate(["lang", lang]);
  }
  
  navigate(route: string){
    this.router.navigate([route]);
  }
}
