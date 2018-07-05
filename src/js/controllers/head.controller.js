class HeadCtrl {
    constructor($http, $transitions, $scope, I18N){
        'ngInject';
        
        this.$http = $http;
        this.$transitions = $transitions;
        this.$scope = $scope;
        this.I18N = I18N;
        
        this.$scope.title = "We are BigBang Studio, a Digital Transformation Agency in Nicaragua";
        this.$scope.description = "In BigBang Studio we develop strategies to reach your goals using Digital marketing, graphic design and Web development. We want to make you grow";

    }
    $onInit(){

        this.$transitions.onStart({}, (transition) => {

            let rutaLang = `${transition.to().name}${this.I18N.val}`;
            let paramsLang = transition.params().servicio;
            
            /*console.log("rutaIdioma: " + rutaLang)
            console.log("parametroIdioma: " + paramsLang);*/

            if (rutaLang == '/ESP' ) {
                this.$http({ method: 'GET', url: `apiseo/homeESP.json` })
                    .then( (res) => { 
                                this.$scope.title = res.data.title; 
                                this.$scope.description = res.data.description;
                        })
                    .catch( err => console.log(err) )
            } else if (rutaLang == '/ENG') {
                this.$http({ method: 'GET', url: `apiseo/homeENG.json` })
                    .then( (res) => { 
                                this.$scope.title = res.data.title; 
                                this.$scope.description = res.data.description;
                        })
                    .catch( err => console.log(err) )
            } else if(paramsLang){
                this.$http({ method: 'GET', url: `apiseo/${ paramsLang }${this.I18N.val}.json` })
                    .then( (res) => { 
                                this.$scope.title = res.data.title; 
                                this.$scope.description = res.data.description;
                        })
                    .catch( err => console.log(err) )
            } else {
                this.$http({ method: 'GET', url: `apiseo/${ rutaLang }.json` })
                    .then( (res) => { 
                                this.$scope.title = res.data.title; 
                                this.$scope.description = res.data.description;
                        })
                    .catch( err => console.log(err) )
            }
        });
    }
}

export default HeadCtrl;
