class HomeCtrl {
    
    constructor($document, $scope, TestService, API) {
        'ngInject'

        this.$document = $document;
        this.$scope = $scope;

        this.API = API;
        this.TestService = TestService;

        this.contador = {
            cafe: 0,
            fifa: 0,
            chistes: 500,
            clientes: 500,
            proyectos: 500
        }
    }
    $onInit() {

        //setTimeout(function(){
                
            var stepTime = Math.abs(Math.floor(2000 / 75));
            console.log(stepTime);
            let intervalo = setInterval(()=>{
                console.log("ya");

                while(this.$scope.home.contador.cafe < this.$scope.home.contador.clientes) {
                    this.$scope.home.contador.cafe += 1;
                    setTimeout(()=>{ this.$scope.$apply(); },100);
                    //this.$scope.$apply();
                    console.log(this.contador.cafe);
                }

                if(this.$scope.home.contador.cafe == 500){
                    clearInterval(intervalo);
                }
            },stepTime);

        //},5000)
    }

    /*contar(){
        while(this.contador.cafe < this.contador.clientes) {
            this.contador.cafe += 1;
            console.log(this.contador.cafe);
        }
    }*/

    scrollDown(){
        var targetOffset = this.$document.find("#slogan").offset().top - (parseInt(jQuery("header").css("padding-bottom")));
        this.$document.find('html,body').stop().animate({scrollTop: targetOffset}, 600);
        console.log(targetOffset);
        
    }
}

export default HomeCtrl;
