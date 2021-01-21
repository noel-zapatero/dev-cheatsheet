import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Language } from '../shared/language';
import { LanguageService } from '../shared/language-service';

@Component({
  selector: 'app-lang-container',
  templateUrl: './lang-container.component.html',
  styleUrls: ['./lang-container.component.css']
})
export class LangContainerComponent implements OnInit {

  lang: string = '';
  language!: Language;
  step: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private langService: LanguageService) {
    
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
    this.language = this.langService.getLang(this.lang)
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
