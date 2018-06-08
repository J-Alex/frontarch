class contactoCtrl {
    constructor($document, $http, $scope, I18N){
        'ngInject'

        this.$document = $document;
        this.$http = $http;

        this.mailObj = {};

        this.$scope = $scope;

        this.I18N = I18N;
        this.LANG;
        this.ESP = {
            maintitle: {
               parte1: "TRABAJEMOS",
               parte2: "JUNTOS"
            },
            maintext:{
                parte1: "Esto es bastante simple, solo responde algunas preguntas",
                parte2: "sobre vos y tu proyecto, nosotros haremos el resto."
            },
            formulario:{
                nombre: "Nombre*",
                correo: "Correo Electrónico*",
                empresa: "Empresa*",
                proyecto: "Detalles del proyecto*",
                boton: "enviar"
            },
            contactos:{
                telefono: "Llámanos",
                titulodireccion: "Visitanos",
                direccion: "Semáforo viejo 1 1/2 cuadras al norte Estelí, Nic.",
                correo: "Escríbenos"
            }
        }
        this.ENG = {
            maintitle: {
                parte1: "LET'S WORK",
                parte2: "TOGETHER"
            },            
            maintext:{
                parte1: "This is pretty simple, just answer some questions",
                parte2: "about you and your project, we will do the rest."
            },            
            formulario:{
                nombre: "Name*",
                correo: "Email*",
                empresa: "Business*",
                proyecto: "Project deatils*",
                boton: "Contact"
            },
            contactos:{
                telefono: "Call us",
                titulodireccion: "Visit us",
                direccion: "semaforo viejo 1 and a half block norht, Estelí, Nicaragua.",
                correo: "Email us"
            }

        }
    }
    $onInit(){
        
        if(this.I18N.val === "ESP") { this.LANG = this.ESP; }
        if(this.I18N.val === "ENG") { this.LANG = this.ENG; } 
        
        this.$scope.$on('changeLang', (event, args) => {
            if (args == 'ESP'){ this.LANG = this.ESP; }
            else { this.LANG = this.ENG; }            
        });

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
