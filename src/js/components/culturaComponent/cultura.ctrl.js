
class culturaCtrl {
    constructor($document, $http, integrantesService, $scope, I18N){
        'ngInject'
        this.$document = $document;
        this.$scope = $scope;
        
        this.I18N = I18N;
        this.LANG;
        this.ESP = {
            valoresmaintitle:"Nuestros valores",
            valores: {
                innovacion:{
                    titulo: 'Innovación',
                    parrafo: 'Siempre pensar fuera de la caja.'
                },
                calidad:{
                    titulo: 'Calidad',
                    parrafo: 'Hacer lo mejor posible en cada trabajo y el trabajo hablara por vos.'
                },
                pasion:{
                    titulo: 'Pasión',
                    parrafo: 'Es necesario realmente amar lo que se hace, o las cosas no van a funcionar.'
                },
                aprendizaje:{
                    titulo: 'Aprendizaje',
                    parrafo: 'Siempre aprendiendo nuevas cosas, no tenemos todas las respuestas, por eso es que seguimos estudiando.'
                },
                cliente:{
                    titulo: 'Cliente céntrico',
                    parrafo: 'Conocer las necesidades de tus clientes, y tratar de suplirlas.'
                },
                profesionalismo:{
                    titulo: 'Profesionalismo',
                    parrafo: ' pesar de contar con un equipo joven, contamos con expertos en las distintas áreas y con gran responsabilidad.'
                }
            },
            idealesmaintitle:{
                parte1: "Nuestros",
                parte2:  "Ideales"
            },
            ideales:{
                ideales1:{
                    titulo1: "Crecimiento",
                    titulo2: "Social",
                    parrafo: "La tecnología se ha convertido en promotora de cambios sociales, por ello utilizamos el marketing digital y estrategia de negocios para aumentar la productividad, rentabilidad y economía de las ciudades"
                },
                ideales2:{
                    titulo1: "Aporte",
                    titulo2: "Cultural",
                    parrafo: "Nuestro objetivo es hacer crecer la cultura visual a través del buen Branding y Diseño gráfico de nuestros proyectos"
                },
                ideales3:{
                    titulo1: "Desarrollo",
                    titulo2: "Tecnológico",
                    parrafo: "Somos fieles promotores de la tecnología digital, creemos en el Marketing digital, Branding, Redes sociales, Diseño gráfico y Desarrollo web como impulsores del éxito"
                }
            },
            pregunta: "¿Quiénes somos?",
            tituloequipo: "El equipo",
            modal:{
                intereses: "Intereses",
                aficiones: "Aficiones",
                titleref: "Referencias e inspiraciones"
            }
        }
        this.ENG = {
            valoresmaintitle:"Our values",
            valores: {
                innovacion:{
                    titulo: 'Innovation',
                    parrafo: 'think always outside the box.'
                },
                calidad:{
                    titulo: ' Quality',
                    parrafo: 'Do the best in every job and your job will speak for you.'
                },
                pasion:{
                    titulo: 'Passion',
                    parrafo: 'You need to really love what are you doing, or things are not going to work.'
                },
                aprendizaje:{
                    titulo: 'Continuous Learning',
                    parrafo: 'Always keep learning new stuffs, we don’t have all the answers, that’s why we have to keep studying.'
                },
                cliente:{
                    titulo: 'Client-centric',
                    parrafo: 'Know what our customers need, and try to fulfill it.'
                },
                profesionalismo:{
                    titulo: 'Professionalism',
                    parrafo: 'Despite that we have a young team, we have experts in the different areas and with great responsibility.'
                }
            },
            idealesmaintitle:{
                parte1: "Our",
                parte2:  "Ideals"
            } ,
            ideales:{
                ideales1:{
                    titulo1: "Social",
                    titulo2: "Growth",
                    parrafo: "Technology has become a promoter of social changes, so we use digital marketing and business strategy to increase productivity, profitability and economy of cities"
                },
                ideales2:{
                    titulo1: "Cultural",
                    titulo2: "Contribution",
                    parrafo: "Our goal is to grow the visual culture through the good Branding and Graphic Design of our projects"
                },
                ideales3:{
                    titulo1: "Technological",
                    titulo2: "development",
                    parrafo: "We are true promoters of digital technology, we believe in digital marketing, branding, social networks, graphic design and web development as drivers of success"
                }
            },
            pregunta: "About us?",
            tituloequipo: "Team BigBang",
            modal:{
                intereses: "Interests",
                aficiones: "Hobbies",
                titleref: "References and inspirations"
            }
        }

        this.servicio= integrantesService;

        this.$http=$http;
        this.integrantes=[];
    }
    $onInit(){
        
        if(this.I18N.val === "ESP") { this.LANG = this.ESP; 
            this.servicio.obtenerIntegrantes("integrantes")
                .then( res => this.integrantes = res );
        }
        if(this.I18N.val === "ENG") { this.LANG = this.ENG; 
            this.servicio.obtenerIntegrantes("integrantes _Eng")
            .then( res => this.integrantes = res );
        }       

        this.$document.find('.header').toggleClass('header-cultura');
        this.$document.find('.header__logo').toggleClass('ocultar-logo');
        this.$document.find('.header-logo').toggleClass('logo-cultura');

        

    }

    abrirModal(integrante){
        this.miembro = integrante;
        this.$document.find('#Modalperfil').css('display', 'block');

        console.log(this);
    }

    cerrarmodal(){
        this.$document.find('#Modalperfil').css('display', 'none');

    }
    
}
export default culturaCtrl;
