class HomeCtrl {
    
    constructor($document, $scope, TestService, API, I18N) {
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


        this.I18N = I18N;
        this.LANG;
        this.ESP = {
            maintitle:{
                parte1:"El punto",
                parte2: "de partida de",
                parte3: "tus ideas.",
            },
            title2:{
                parte1:"Creemos en la",
                parte2:"innovación",
                parte3:"como base del crecimiento y desarrollo...",
                pregunta:"¿Querés saber sobre nosotros?"
            },
            ideales:{
                maintitle: "Nuestros ideales",
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
            contador:{
                tazascafe: "tazas de café",
                fifa: "Juegos de FIFA",
                chistes1: "Chistes", 
                chistes2: "Malos",
                clientes1: "clientes", 
                clientes2: "satisfechos",
                proyectos1: "proyectos",
                proyectos2: "terminados",
            },
            nosotros:{
                tparte1: "Nos",
                tparte2: "mueve",
                tparte3: "ser",
                tparte4: "el",
                tparte5: "cambio",
                parrafo1: "Integramos creatividad, tecnología y estrategia con el objetivo de hacer crecer marcas, negocios y personas",
                parrafo2: "Transformamos sueños, proyectos, objetivos y metas en experiencias digitales para un universo en constante expansión"
            },
            clientestitle: "Nuestros Clientes"
        }
        this.ENG = {
            maintitle:{
                parte1:"The starting",
                parte2: "point of",
                parte3: "your ideas.",
            },
            title2:{
                parte1:"We believe in",
                parte2:"the innovation",
                parte3:"as foundation to growth and development...",
                pregunta:"Do you want to know about us?"
            },
            ideales:{
                maintitle: "Our Ideals",
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
            contador:{
                tazascafe: "coffee cups",
                fifa: "FIFA matchs",
                chistes1: "Bad", 
                chistes2: "jokes",
                clientes1: "Happy", 
                clientes2: "Clients",
                proyectos1: "finish",
                proyectos2: "projects",
            },
            nosotros:{
                tparte1: "OUR",
                tparte2: "ENGINE",
                tparte3: "is to",
                tparte4: "BE THE",
                tparte5: "change",
                parrafo1: "We include creativity, technology and strategy with the goal to make brands, business and people grow ",
                parrafo2: "We transform dreams, projects, objective and goals into digital experiences for a universe in continuous expansion"
            },
            clientestitle: "OUR CLIENTS"
        }

    }
    $onInit() {
<<<<<<< HEAD
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
=======
        setTimeout(()=>{this.contar()}, 2500)   

        if(this.I18N.val === "ESP") { this.LANG = this.ESP; }
        if(this.I18N.val === "ENG") { this.LANG = this.ENG; }  
        //console.log(this.cafe);         
>>>>>>> 1df5aa57a9a2b4400b97945e73d36d9373a8e05f
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
