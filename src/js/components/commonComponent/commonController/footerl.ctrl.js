class FooterCtrl {

    constructor($document, $scope, I18N){
        'ngInject';

        this.$document = $document;
        this.$scope = $scope;
        this.I18N = I18N;


        this.ESP = {
            maintitle: "Tu proyecto comienza aquí",
            boton: "¡Hablemos!",
            direccion: "Semáforo viejo 1 1/2 cuadras al norte. Estelí, Nicaragua.",
            correo: "contacto@bigbangnica.studio ",
            telefono: "Tel.: (505) 8853 9870",
            copy: "TODOS LOS DERECHOS RESERVADOS",
            frase: "Hecho en Nicaragua con gallo pinto y pinol."
        }
        this.ENG = {
            maintitle: "Your project begin here",
            boton: "¡Lets talk!",
            direccion: "Visit us semaforo viejo 1 and a half block norht, Estelí, Nicaragua.",
            correo: "contacto@bigbangnica.studio ",
            telefono: "Call us (505) 8853 9870",
            copy: "ALL RIGHTS RESERVED",
            frase: "Made in Nicaragua with gallo pinto and pinol." 
        }
        
        this.LANG;
    }

    $onInit(){
        if(this.I18N.val === "ESP") { this.LANG = this.ESP; }
        if(this.I18N.val === "ENG") { this.LANG = this.ENG; }
        
        this.$scope.$on('changeLang', (event, args) => {
            if (args == 'ESP'){ this.LANG = this.ESP; }
            else { this.LANG = this.ENG; }            
        });
    }

}

export default FooterCtrl;
