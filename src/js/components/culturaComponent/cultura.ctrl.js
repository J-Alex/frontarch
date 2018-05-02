
class culturaCtrl {
    constructor($document, $http, integrantesService, $scope){
        'ngInject'
        this.$document = $document;
        this.$scope = $scope;

        this.servicio= integrantesService;

        this.$http=$http;
        this.integrantes=[];
    }
    $onInit(){
        this.$document.find('.header').toggleClass('header-cultura');
        this.$document.find('.header__logo').toggleClass('ocultar-logo');
        this.$document.find('.header-logo').toggleClass('logo-cultura');

        this.servicio.obtenerIntegrantes()
            .then( res => this.integrantes = res );

    }

    abrirModal(integrante){
        this.miembro = integrante;
        this.$document.find('#Modalperfil').css('display', 'block');

        console.log(this);
    }

    cerrarmodal(){
        this.$document.find('#Modalperfil').css('display', 'none');

    }
    
}
export default culturaCtrl;
