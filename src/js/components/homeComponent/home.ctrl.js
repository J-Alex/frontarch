class HomeCtrl {
    
    constructor($document, TestService, API) {
        'ngInject'

        this.$document = $document;

        this.API = API;
        this.TestService = TestService;
    }

    $onInit() {
        
    }
    scrollDown(){
        var targetOffset = this.$document.find("#slogan").offset().top - (parseInt(jQuery("header").css("padding-bottom")));
        this.$document.find('html,body').stop().animate({scrollTop: targetOffset}, 600);
        console.log(targetOffset);
        
    }
}

export default HomeCtrl;
