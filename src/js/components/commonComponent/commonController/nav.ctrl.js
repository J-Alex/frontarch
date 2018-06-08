class NavCtrl {

    constructor($document, $scope, I18N){
        'ngInject';

        this.$document = $document;
        this.$scope = $scope;
        this.I18N = I18N;

        this.ESP = {
            inicio: "Inicio",
            servicios: "Servicios",
            portafolio: "Portafolio",
            cultura: "Cultura",
            contacto: "Contacto"
        }
        this.ENG = {
            inicio: "Home",
            servicios: "Services",
            portafolio: "Portfolio",
            cultura: "Culture", 
            contacto: "Contact"
        }
        
        this.LANG;
    }

    $onInit(){
        if(this.I18N.val === "ESP") { this.LANG = this.ESP; }
        if(this.I18N.val === "ENG") { this.LANG = this.ENG; }
    }

    closeMenu(){
        this.$document.find('.menu-wrapper').toggleClass('menu-wrapper--white');
        this.$document.find('.hamburger').toggleClass('togle');
        // this.$document.find('.nav').toggleClass('nav--is-visible');
        this.$document.find('.nav-component').toggleClass('nav--is-visible');

    }

}

export default NavCtrl;
