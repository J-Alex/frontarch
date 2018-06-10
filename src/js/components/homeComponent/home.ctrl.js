class HomeCtrl {
    
    constructor($document, $scope, TestService, API, I18N) {
        'ngInject'

        this.$document = $document;
        this.$scope = $scope;

        this.API = API;
        this.TestService = TestService;

        this.contadorTotal = {
            cafe: 100,
            fifa: 200,
            chistes: 560,
            clientes: 35,
            proyectos: 40
        }
        this.contador = {
            cafe: 0,
            fifa: 0,
            chistes: 0,
            clientes: 0,
            proyectos: 0
        }
        this.contadorBind = {
            cafe: 0,
            fifa: 0,
            chistes: 0,
            clientes: 0,
            proyectos: 0
        }
        /*this.cafe = 0;
        this.cont = 0;*/


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
                parte2: "point for",
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
                    parrafo: "Technology has become a promoter of social changes, so we use digital marketing and business strategy to increase the productivity, profitability and economy of cities"
                },
                ideales2:{
                    titulo1: "Cultural",
                    titulo2: "Contribution",
                    parrafo: "Our goal is to grow the visual culture through the good branding and graphic design of our projects"
                },
                ideales3:{
                    titulo1: "Technological",
                    titulo2: "development",
                    parrafo: "We are faithful  promoters of digital technology, we believe in Digital Marketing, Branding, Social Networks, Graphic Design and Web Development as drivers of success"
                }
            },
            contador:{
                tazascafe: "coffee",
                tazascafe2: "cups",
                fifa: "FIFA",
                fifa2: "Matchs",
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
                parrafo1: "We integrate creativity, technology and strategy with the aim to make brands, business and people grow",
                parrafo2: "We transform dreams, projects, aims and goals into digital experiences for an universe in continuous expansion"
            },
            clientestitle: "OUR CLIENTS"
        }

    }
    $onInit() {
        //setTimeout(()=>{this.contar()}, 2500)   

        if(this.I18N.val === "ESP") { this.LANG = this.ESP; }
        if(this.I18N.val === "ENG") { this.LANG = this.ENG; }
        
        this.$scope.$on('changeLang', (event, args) => {
            if (args == 'ESP'){ this.LANG = this.ESP; }
            else { this.LANG = this.ENG; }            
        });

        let vidaBigbang = document.getElementById('vidaBigbang');
        let viewportH = window.innerHeight;
        this.$document.scroll( (ev) => {
            //console.log(vidaBigbang.getBoundingClientRect().top, viewportH/2 );
            if(vidaBigbang.getBoundingClientRect().top < viewportH/2){
                console.log( "llegaste a la mitad" );
                this.contar()
            }
        });
    }

    contar(){
        while(this.contador.cafe < this.contadorTotal.cafe) {
            setTimeout(()=>{
                this.$scope.home.contadorBind.cafe += 1;
                this.$scope.$apply();
            },100);
            this.contador.cafe += 1;
        }
        while(this.contador.fifa < this.contadorTotal.fifa) {
            setTimeout(()=>{
                this.$scope.home.contadorBind.fifa += 1;
                this.$scope.$apply();
            },100);
            this.contador.fifa += 1;
        }
        while(this.contador.chistes < this.contadorTotal.chistes) {
            setTimeout(()=>{
                this.$scope.home.contadorBind.chistes += 1;
                this.$scope.$apply();
            },100);
            this.contador.chistes += 1;
        }
        while(this.contador.clientes < this.contadorTotal.clientes) {
            setTimeout(()=>{
                this.$scope.home.contadorBind.clientes += 1;
                this.$scope.$apply();
            },100);
            this.contador.clientes += 1;
        }
        while(this.contador.proyectos < this.contadorTotal.proyectos) {
            setTimeout(()=>{
                this.$scope.home.contadorBind.proyectos += 1;
                this.$scope.$apply();
            },100);
            this.contador.proyectos += 1;
        }

    }

    scrollDown(){
        var targetOffset = this.$document.find("#slogan").offset().top - (parseInt(jQuery("header").css("padding-bottom")));
        this.$document.find('html,body').stop().animate({scrollTop: targetOffset}, 600);
        console.log(targetOffset);        
    }
}

export default HomeCtrl;
