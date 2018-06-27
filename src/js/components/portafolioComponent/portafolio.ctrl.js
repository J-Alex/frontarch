
class portafolioCtrl {
    constructor($document, $scope, I18N){
        'ngInject'

        this.$document = $document;
        this.$scope = $scope;
        this.I18N = I18N;
        this.LANG;

        this.ESP = {
            titulos: {
                title1: "TODOS",
                title2: "WEB",
                title3: "DISEÑO",
                title4: "MARKETING"
            },
            proyectos:{
                farem:{
                    tipo: "web",
                    imagen: "res/img/recursos/FAREM.jpg",
                    empresa: "FAREM-Estelí",
                    servicio: "Sitio web",
                    brevedescripcion: "FAREM Estelí es el recinto universitario más importante del norte de Nicaragua y nosotros hicimos su web."
                },                
                lacolonia:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/La Colonia.jpg",
                    empresa: "La Colonia",
                    servicio: "Mundial 2018",
                    brevedescripcion: "La Colonia es “El super de Nicaragua” y fuimos sus cómplices al llevar un poco de la pasión del mundial a todos los nicaragüenses."
                },                
                jaliskos:{
                    tipo: "marketing",
                    imagen: "res/img/recursos/Jaliskos SM.jpg",
                    empresa: "Jaliskos",
                    servicio: "Social media",
                    brevedescripcion: "El trabajo que hemos realizado con Jaliskos es más que gratificante. Es un ejemplo de conversión de seguidores a consumidores."
                },
                mundo:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Mundo.jpg",
                    empresa: "Mundo",
                    servicio: "Imagen de marca",
                    brevedescripcion: "Mundo es una microempresa de renta de autos pero el ser pequeña no le impide verse mejor que sus grandes competidores."
                },
                pinkparty :{
                    tipo: "marketing",
                    imagen: "res/img/recursos/Pink Party.jpg",
                    empresa: "Pink Party",
                    servicio: "Publicidad",
                    brevedescripcion: "Con Pink Party hicimos de todo: rebranding, fotografía, social media y una que otra locura publicitaria."
                },
                isnaya :{
                    tipo: "web",
                    imagen: "res/img/recursos/Isnaya.jpg",
                    empresa: "Isnaya",
                    servicio: "Aplicación Web",
                    brevedescripcion: "Isnaya se encarga de imprimir un mundo de colores, para eso deben manejar el control de sus costos, para lo cual fuimos de gran ayuda."
                },
                cynthias:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Cynthias.jpg",
                    empresa: "Cynthias",
                    servicio: "Imagen de marca",
                    brevedescripcion: "Cynthias es uno de esos negocios emprendedores los cuales nos motivan mucho a realiza su imagen de marca."
                },
                miraflor:{
                    tipo: "web",
                    imagen: "res/img/recursos/miraflor.jpg",
                    empresa: "Miraflor",
                    servicio: "Sitio Web",
                    brevedescripcion: "Miraflor es uno de los tesoros naturales de la ciudad de Estelí en Nicaragua. Nos encantó trabajar la web que te invita a conocerlo."
                },
                ESCI:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Familias Unidas.jpg",
                    empresa: "Cooperativa para la Educación ESCI",
                    servicio: "",
                    brevedescripcion: "Fuimos los elegidos para dar vida a la campaña de prevención de explotación sexual comercial infantil en Nicaragua."
                },
                hospitalmilitar:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Hosptal Militar.jpg",
                    empresa: "Hospital Militar:",
                    servicio: " Simposio Diabetes",
                    brevedescripcion: "El Simposio de Diabetes del Hospital Militar en su X edición tuvo por 1ra vez una imágen de marca de la cual fuimos responsables."
                },
                melany:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Melany.jpg",
                    empresa: "Melany",
                    servicio: "Imagen de marca",
                    brevedescripcion: "Melany es el salón oficial de BigBang, fue más que un honor realizar su imagen corporativa y el resultado nos encantó."
                },
                jaliskos2:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Jaliskos.jpg",
                    empresa: "Jaliskos",
                    servicio: "Imagen de marca",
                    brevedescripcion: "Jalisko’s no es como cualquier taquería de Estelí, Jalisko’s es una verdadera marca."
                },
                apiflor:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/ApiFlor.jpg",
                    empresa: "ApiFlor",
                    servicio: "Imagen de marca",
                    brevedescripcion: "Apiflor es nuestro primer acercamiento a la apicultura, fué un proyecto tan retador como satisfactorio."
                }, 
                samcora:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Samcora.jpg",
                    empresa: "Samcora",
                    servicio: "Imagen de marca",
                    brevedescripcion: "Samcora es una empresa muy femenina pero capaz de triunfar en el duro rubro de la construcción y su imagen refleja esa esencia."
                }, 
                lindocruz:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/LindoCruz.jpg",
                    empresa: "Lindo Cruz",
                    servicio: "Imagen de marca",
                    brevedescripcion: "Ubicada en Tapachula, Chiapas. Lindo Cruz es un contructora con una visión muy clara de innovación y calidad."
                },
                BourbonCafe:{
                    tipo: "marketing",
                    imagen: "res/img/recursos/Bourbon.jpg",
                    empresa: "Bourbon Café",
                    servicio: "Social media",
                    brevedescripcion: "La atención al detalle nos ha permitido posicionar en el mundo digital a Bourbon como lo que es: calidad, pasión y estilo."
                },
                cprocura:{
                    tipo: "marketing",
                    imagen: "res/img/recursos/clínicaprocura.jpg",
                    empresa: "Clínica Procura",
                    servicio: "Social media",
                    brevedescripcion: "Procurar que los pacientes se preocupen por su salud es el principal objetivo de esta clínica y el nuestro como sus aliados."
                }                  
            }
        }
        this.ENG = {
            titulos: {
                title1: "ALL",
                title2: "WEB",
                title3: "DESIGN",
                title4: "MARKETING"
            },
            proyectos:{
                farem:{
                    tipo: "web",
                    imagen: "res/img/recursos/FAREM.jpg",
                    empresa: "FAREM-Estelí",
                    servicio: "Web site",
                    brevedescripcion: "FAREM Estelí it´s the more important University campus in the north of Nicaragua, and we made their website."
                },                
                lacolonia:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/La Colonia.jpg",
                    empresa: "La Colonia",
                    servicio: "Mundial 2018",
                    brevedescripcion: "La Colonia it’s “Nicaragua’s Supermarket” and we were their partners in taking a little of the world cup passion to all the Nicaraguans."
                },                
                jaliskos:{
                    tipo: "marketing",
                    imagen: "res/img/recursos/Jaliskos SM.jpg",
                    empresa: "Jaliskos",
                    servicio: "Social media",
                    brevedescripcion: "It’s really gratifying all the job we have done with Jalisko’s. This is a huge example for conversion from followers to clients."
                },
                mundo:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Mundo.jpg",
                    empresa: "Mundo",
                    servicio: "Branding",
                    brevedescripcion: "Mundo it’s a micro car rental business, but being small doesn't inhibit them from looking better than the biggest competitors."
                },
                pinkparty :{
                    tipo: "marketing",
                    imagen: "res/img/recursos/Pink Party.jpg",
                    empresa: "Pink Party",
                    servicio: "Social media",
                    brevedescripcion: "With Pink Party we did a lot: rebranding, photography, social media and somes advertising inventions."
                },
                isnaya :{
                    tipo: "web",
                    imagen: "res/img/recursos/Isnaya.jpg",
                    empresa: "Isnaya",
                    servicio: "Web aplication",
                    brevedescripcion: " Isnaya is responsible for printing a world of colors, for that, they got to have a detailed cost control, and we helped with that."
                },
                cynthias:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Cynthias.jpg",
                    empresa: "Cynthias",
                    servicio: "Branding",
                    brevedescripcion: "Cynthia's Beauty Bar it’s one of that entrepreneur business that motivate us to do the Branding."
                },
                miraflor:{
                    tipo: "web",
                    imagen: "res/img/recursos/miraflor.jpg",
                    empresa: "Miraflor",
                    servicio: "Web site",
                    brevedescripcion: "Miraflor es uno de los tesoros naturales de la ciudad de Estelí en Nicaragua. Nos encantó trabajar la web que te invita a conocerlo."
                },
                ESCI:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Familias Unidas.jpg",
                    empresa: "Cooperativa para la Educación ESCI",
                    servicio: "",
                    brevedescripcion: "We were chosen to bring to life the prevention campaign for commercial sexual exploitation of children in Nicaragua."
                },
                hospitalmilitar:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Hosptal Militar.jpg",
                    empresa: "Military Hospital",
                    servicio: "Simposio Diabetes",
                    brevedescripcion: "The Diabetes Symposium of the Military Hospital in its X edition, had for the first time their branding, for which we were responsible."
                },
                melany:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Melany.jpg",
                    empresa: "Melany",
                    servicio: "Branding",
                    brevedescripcion: "Melany it’s the Bigbang’s official beauty salon, it was a really honor for us made their brand image, and we loved the results."
                },
                jaliskos2:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Jaliskos.jpg",
                    empresa: "Jaliskos",
                    servicio: "Branding",
                    brevedescripcion: "Jalisko’s it’s not like any other taco store in Nicaragua, Jalisko’s it’s a real Brand"
                },
                apiflor:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/ApiFlor.jpg",
                    empresa: "ApiFlor",
                    servicio: "Branding",
                    brevedescripcion: "Apiflor it’s our our first approach to beekeeping, it was a project as challenging as satisfactory."
                }, 
                samcora:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Samcora.jpg",
                    empresa: "Samcora",
                    servicio: "Branding",
                    brevedescripcion: "SAMCORA it’s a very feminine business, but able to succeed in the hard field of construction and its image reflects its essence."
                }, 
                lindocruz:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/LindoCruz.jpg",
                    empresa: "Lindo Cruz",
                    servicio: "Branding",
                    brevedescripcion: "Located in Tapachula, Chiapas. Lindo Cruz its a Construction company with a very clear innovation and quality vision."
                },
                BourbonCafe:{
                    tipo: "marketing",
                    imagen: "res/img/recursos/Bourbon.jpg",
                    empresa: "Bourbon Café",
                    servicio: "Social media",
                    brevedescripcion: "Ubicada en Tapachula, Chiapas. Lindo Cruz es un contructora con una visión muy clara de innovación y calidad."
                },
                cprocura:{
                    tipo: "marketing",
                    imagen: "res/img/recursos/clínicaprocura.jpg",
                    empresa: "Clínica Procura",
                    servicio: "Social media",
                    brevedescripcion: "Ubicada en Tapachula, Chiapas. Lindo Cruz es un contructora con una visión muy clara de innovación y calidad."
                }         
            }

        }

    }
    $onInit(){
        if(this.I18N.val === "ESP") { this.LANG = this.ESP; }
        if(this.I18N.val === "ENG") { this.LANG = this.ENG; }  
    }
}
export default portafolioCtrl;
