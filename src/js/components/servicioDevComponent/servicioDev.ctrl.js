
class servicioDevCtrl {
    constructor($document){
        'ngInject'
        this.$document = $document;
    }
    $onInit(){
    }

    scrollDown(){
        var targetOffset = this.$document.find("#developerService").offset().top - (parseInt(jQuery("header").css("padding-bottom")));
        this.$document.find('html,body').stop().animate({scrollTop: targetOffset}, 600);
        console.log(targetOffset);        
    }
    
    open(){
        // modal web
        var modal = document.getElementById("Modalaservice");
        var btn = document.getElementById("btn_open");
        var span = document.getElementsByClassName("close")[0];
        btn.onclick = function() {
            modal.style.display = "block";
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    /* open($namemodal,$btnOpen,$close){
        // modal web
        var modal = document.getElementById($namemodal);
        var btn = document.getElementById($btnOpen);
        var span = document.getElementsByClassName($close)[0];
        btn.onclick = function() {
            modal.style.display = "block";
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } */
}
export default servicioDevCtrl;
