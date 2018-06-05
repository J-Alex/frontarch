
class serviciosCtrl {
    constructor($document, $scope, I18N){
        'ngInject'

        this.$document = $document;
        this.$scope = $scope;

        this.I18N = I18N;
        this.LANG;
        this.ESP = {
            maintitle: "servicios",
            maintext: "El mundo, los negocios y la comunicación han cambiado, ¿y vos? Descubrí y explotá(como musulmán) el potencial de tu empresa con nosotros. Conocé de lo que somos capaces.",
            secondtitle: "Lorem ipsum dolor sit amet elit.",
            servicios1:{
                titulo1: "Desarrollo",
                titulo2: "web",
                parrafo: "Creemos que la optimización y automatización de procesos mediante nuestros softwares son la solución práctica para potenciarte en el mercado."
            },
            servicios2:{
                titulo1: "Diseño",
                titulo2: "gráfico",
                parrafo: "Desarrollamos tus conceptos en: Identidad corporativa (logotipo y marca), papelería, cartelería, expresiones editoriales, diseño publicitario y web."
            },
            servicios3:{
                titulo1: "Marketing",
                titulo2: "digital",
                parrafo: "Establecer relaciones de valor entre el cliente y la empresa es vital para el éxito empresarial. Esto lo hace posible mediante el conocimiento de las tecnologias y su aplicación."
            }
        }
        this.ENG = {
            maintitle: "service",
            maintext: "The world, business and communication have changed, and you? Discover and exploit (as a Muslim) the potential of your company with us. Know what we are capable of.",
            secondtitle: "Lorem ipsum dolor sit amet elit.",
            servicios1:{
                titulo1: "Web",
                titulo2: "development",
                parrafo: "We believe that the optimization and automation of processes through our software are the practical solution to empower you in the market."
            },
            servicios2:{
                titulo1: "Graphic",
                titulo2: "design",
                parrafo: "We develop your concepts in: Corporate identity (logo and brand), stationery, posters, editorial expressions, advertising design and web."
            },
            servicios3:{
                titulo1: "Digital",
                titulo2: "marketing",
                parrafo: "Establishing value relationships between the client and the company is vital for business success. This makes it possible through knowledge of technologies and their application."
            }
        }
        
    
    }

    $onInit(){
        if(this.I18N.val === "ESP") { this.LANG = this.ESP; }
        if(this.I18N.val === "ENG") { this.LANG = this.ENG; } 
           
    }
    scrollDown(){
        var targetOffset = this.$document.find("#servicios-conten").offset().top - (parseInt(jQuery("header").css("padding-bottom")));
        this.$document.find('html,body').stop().animate({scrollTop: targetOffset}, 600);
        console.log(targetOffset);        
    }
}
export default serviciosCtrl;
