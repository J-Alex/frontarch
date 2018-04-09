
class servicioMarketingCtrl {
    constructor($document){
        'ngInject'
        this.$document = $document;
    }
    $onInit(){
    }

    scrollDown(){
        var targetOffset = this.$document.find("#marketing-service").offset().top - (parseInt(jQuery("header").css("padding-bottom")));
        this.$document.find('html,body').stop().animate({scrollTop: targetOffset}, 600);
        console.log(targetOffset);        
    }
}
export default servicioMarketingCtrl;
