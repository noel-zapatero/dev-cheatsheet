import { Injectable } from "@angular/core";
import { Language } from "./language";

@Injectable()
export class LanguageService{

    getLang(lang: string){
        return new Language(lang)
    }
}