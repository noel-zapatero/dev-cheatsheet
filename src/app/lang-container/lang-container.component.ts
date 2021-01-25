import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import languages from '../../assets/json/languages.json'
@Component({
  selector: 'app-lang-container',
  templateUrl: './lang-container.component.html',
  styleUrls: ['./lang-container.component.css']
})
export class LangContainerComponent implements OnInit {

  lang: string = '';
  step: number = 0;
  json: any = languages;
  selectedLang: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
    
      this.router.events.subscribe((ev) =>{
      if(ev instanceof NavigationEnd){
        this.reset()
      }
    })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.lang = params.lang
    });

    this.reset()
  }

  reset(){
    this.setStep(0);  
    this.setLang();
  }
  
  setLang(){
    this.selectedLang = this.json[this.lang]
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
