class NavCtrl {

    constructor($document){
        'ngInject';

        this.$document = $document;
    }

    $onInit(){
        console.log("nav ctrl");
    }

    closeMenu(){
        this.$document.find('.menu-wrapper').toggleClass('menu-wrapper--white');
        this.$document.find('.hamburger').toggleClass('togle');
        // this.$document.find('.nav').toggleClass('nav--is-visible');
        this.$document.find('.nav-component').toggleClass('nav--is-visible');

    }

}

export default NavCtrl;
