class contactoCtrl {
    constructor($document, $http){
        'ngInject'

        this.$document = $document;
        this.$http = $http;

        this.mailObj = {};
    }
    $onInit(){
        this.$document.find('.hablemos').toggleClass('ocultar');
    }
    
    sendMail() {
        let formulario = this.$document.find('.contact-form')[0];
        console.log(this.mailObj);
        
        this.$http.post("../../api/mail-api.php", this.mailObj)
        .then(function(data,status,headers,config){
            console.log(data);
            formulario.reset();
        },function(err,status,headers,config){
            console.log(err);
        });
    };
}
export default contactoCtrl;
