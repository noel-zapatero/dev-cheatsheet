import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
      name: 'C#'
    }
  ]

  navigate(lang: string){
    this.router.navigate(["lang", lang]);
  }
}
