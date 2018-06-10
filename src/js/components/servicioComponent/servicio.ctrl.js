
class servicioCtrl {
    constructor($document, $http, $scope, $location, servicioService){
        'ngInject'
        this.$document = $document;
        this.$scope = $scope;
        this.$http=$http;
        this.$location = $location;

        this.servicioService = servicioService;

        this.mailObj={};
    } 
    reverseString(str) {
        return str.split("").reverse().join("");
    }
    $onInit(){
        let address = this.$location.path();
        let match = '';
        let bar = true;

        for (let i = address.length - 1; bar == true; i--) {
            if(address[i] != '/'){
                match += address[i];
            } else {
                bar = false;
            }
        }

        let servicio = this.reverseString(match);

        this.$scope.$on('changeLang', (event, args) => {
            this.servicioService.obtenerServicio(servicio)
            .then( servicio => this.servicio = servicio )
            .catch( err => console.log(err) );
        });

    }
    scrollDown(){
        var targetOffset = this.$document.find("#conten-Service").offset().top - (parseInt(jQuery("header").css("padding-bottom")));
        this.$document.find('html,body').stop().animate({scrollTop: targetOffset}, 600);
        console.log(targetOffset);        
    }

    openmodal(modalTitle){
        this.tituloModal = modalTitle;
        this.mailObj.tituloModal = modalTitle;
        console.log("MODAL!!!")
        var modal = document.getElementById("Modalservice");
        //var btn = document.getElementById("btn_open");
        var span = document.getElementsByClassName("closemodal")[0];
        
        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
    

    enviarMail() {
        let formulario = this.$document.find('.modal-form')[0];
        console.log(this.mailObj, );

        
        this.$http.post("../../api2/mail-api.php", this.mailObj)
        .then(function(data,status,headers,config){
            console.log(data);
            formulario.reset();
        },function(err,status,headers,config){
             console.log(err);
         }); 
    };

}
export default servicioCtrl;
