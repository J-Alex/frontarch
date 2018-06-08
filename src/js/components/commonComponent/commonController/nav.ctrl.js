class NavCtrl {

    constructor($window, $document, $rootScope, $scope, I18N){
        'ngInject';

        this.$window = $window;
        this.$document = $document;
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.I18N = I18N;

        this.ESP = {
            inicio: "Inicio",
            servicios: "Servicios",
            portafolio: "Portafolio",
            cultura: "Cultura",
            contacto: "Contácto"
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
    changeLang(language){
        this.$window.localStorage['I18N'] = language;

        if(language === 'ESP'){ this.LANG = this.ESP; }
        else { this.LANG = this.ENG; }

        this.I18N.setLang(language)
        this.$rootScope.$broadcast('changeLang', language);

    }
    /*langToEng(){
        this.LANG = this.ENG;
        this.I18N.setLang('ENG')
        this.$rootScope.$broadcast('ENG');
    }
    langToEsp(){
        this.LANG = this.ESP;
        this.I18N.setLang('ESP')
        this.$rootScope.$broadcast('ESP');
    }*/

    closeMenu(){
        this.$document.find('.menu-wrapper').toggleClass('menu-wrapper--white');
        this.$document.find('.hamburger').toggleClass('togle');
        // this.$document.find('.nav').toggleClass('nav--is-visible');
        this.$document.find('.nav-component').toggleClass('nav--is-visible');

    }

}

export default NavCtrl;
