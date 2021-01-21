export class Language{
    constructor(lang:string){
        this.intro = 'intro ' + lang;
        this.sintaxis = 'synt ' + lang;
        this.herramientas = [lang];
    }

    public intro: string = '';
    public sintaxis: string = '';
    public herramientas: string[] = [];
}