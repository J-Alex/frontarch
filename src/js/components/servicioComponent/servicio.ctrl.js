
class servicioCtrl {
    constructor($document, $http){
        'ngInject'
        this.$document = $document;

        this.$http=$http;

        this.mailObj={};
    }
    $onInit(){
        console.log(this.servicio);
    }
    scrollDown(){
        var targetOffset = this.$document.find("#conten-Service").offset().top - (parseInt(jQuery("header").css("padding-bottom")));
        this.$document.find('html,body').stop().animate({scrollTop: targetOffset}, 600);
        console.log(targetOffset);        
    }

    openmodal(modalTitle){
        this.tituloModal = modalTitle;
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

    sendMail(){
        let formulario= this.document.find('.modal-form')[0];
        console.log(this.mailObj);
    }



}
export default servicioCtrl;
