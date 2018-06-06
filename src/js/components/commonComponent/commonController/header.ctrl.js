class HeaderCtrl {

    constructor($document){
        'ngInject';
        this.$document = $document;
    }

    $onInit(){
    }
    showMenu(){
        this.$document.find('.menu-wrapper').toggleClass('menu-wrapper--white');
        this.$document.find('.hamburger').toggleClass('togle');
        // this.$document.find('.nav').toggleClass('nav--is-visible');
        this.$document.find('.nav-component').toggleClass('nav--is-visible');
    }

}

export default HeaderCtrl;
