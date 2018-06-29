
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
                    parrafo: 'Siempre pensamos fuera de la caja.'
                },
                calidad:{
                    titulo: 'Calidad',
                    parrafo: 'Hacemos lo mejor posible en cada trabajo para que el trabaja hable por nosotros.'
                },
                pasion:{
                    titulo: 'Pasión',
                    parrafo: 'Al amar lo que hacemos, hacemos que las cosas funcionen.'
                },
                aprendizaje:{
                    titulo: 'Aprendizaje',
                    parrafo: 'Siempre estamos aprendiendo cosas nuevas. Cuando no hemos tenido una respuesta, hemos aprendido a buscarla.'
                },
                cliente:{
                    titulo: 'Cliente céntrico',
                    parrafo: 'Nos interesamos por las necesidades de los clientes y nos esforzamos por suplirlas.'
                },
                profesionalismo:{
                    titulo: 'Profesionalismo',
                    parrafo: 'Somos jóvenes profesionales, expertos en distintas áreas y con gran responsabilidad.'
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
                    parrafo: 'We always think outside the box.'
                },
                calidad:{
                    titulo: ' Quality',
                    parrafo: 'We do our best in every job and the job will speak for us.'
                },
                pasion:{
                    titulo: 'Passion',
                    parrafo: 'Really loving what we do, we make the things work.'
                },
                aprendizaje:{
                    titulo: 'Continuous Learning',
                    parrafo: 'Always keep learning new stuffs, when we haven’t had an answer, we have learned to look for it.'
                },
                cliente:{
                    titulo: 'Client-centric',
                    parrafo: 'We care for what our customers need, and try to fulfill it.'
                },
                profesionalismo:{
                    titulo: 'Professionalism',
                    parrafo: 'We are a professional young team, we are experts in different areas and with great responsibility.'
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
        
        this.$scope.$on('changeLang', (event, args) => {
            if (args == 'ESP'){ this.LANG = this.ESP; }
            else { this.LANG = this.ENG; }            
        });

        this.$document.find('.header').toggleClass('header-cultura');
        this.$document.find('.header__logo').toggleClass('ocultar-logo');
        this.$document.find('.header-logo').toggleClass('logo-cultura'); 
    }

    abrirModal(integrante, ev){

        this.miembro = integrante;
        this.$document.find('#Modalperfil').css('display', 'block');

        /*this.$document.find('#Modalperfil').show({
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        }) */
        console.log(this);
    }

    cerrarmodal(){
        this.$document.find('#Modalperfil').css('display', 'none');   
    }   


    
}
export default culturaCtrl;
