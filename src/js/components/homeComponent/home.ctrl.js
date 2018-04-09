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
        this.cafe = 0;
        this.cont = 0;
    }
    $onInit() {
        let vidaBigbang = this.$document.find('.vidaBigbang');
        let document = this.$document;
        //setTimeout(()=>{this.contar()}, 2500)
        
        /*document.scroll(function(e) {
            if(document.scrollTop() > 1890 ){
                console.log("true");
                setInterval(()=>{

                    while(this.$scope.cafe < 1000) {
                        this.$scope.cafe += 1;
                        setTimeout(()=>{
                            this.$scope.home.cont += 1;
                            this.$scope.$apply();
                        },100);
                    }
        
                    if(this.$scope.cafe == 500){
                        clearInterval(intervalo);
                    }
                    
                },2500);
           
            }
        });*/   
        //console.log(this.cafe);
        this.contar();
    }

    contar(){
        let intervalo = setInterval(()=>{
            //console.log("start");

            while(this.cafe < 1000) {
                this.cafe += 1;
                setTimeout(()=>{
                    this.$scope.home.cont += 1;
                    this.$scope.$apply();
                },100);
                //console.log(this.cafe);
            }

            if(this.cafe == 500){
                //console.log("end");
                clearInterval(intervalo);
            }
        },2500);
    }

    scrollDown(){
        var targetOffset = this.$document.find("#slogan").offset().top - (parseInt(jQuery("header").css("padding-bottom")));
        this.$document.find('html,body').stop().animate({scrollTop: targetOffset}, 600);
        console.log(targetOffset);        
    }
}

export default HomeCtrl;
