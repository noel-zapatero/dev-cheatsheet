import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lang-container',
  templateUrl: './lang-container.component.html',
  styleUrls: ['./lang-container.component.css']
})
export class LangContainerComponent implements OnInit {

  lang: string = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.lang = params.lang
    });
  }

}
