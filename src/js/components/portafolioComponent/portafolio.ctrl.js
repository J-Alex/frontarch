
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
                    brevedescripcion: "El trabajo de redes que hemos realizado con Jaliskos es más que gratificante. Es el ejemplo vivo de conversión de seguidores a consumidores."
                },                
                jaliskos:{
                    tipo: "marketing",
                    imagen: "res/img/recursos/Jaliskos SM.jpg",
                    empresa: "Jaliskos",
                    servicio: "Social media",
                    brevedescripcion: " El trabajo de redes que hemos realizado con Jaliskos es más que gratificante. Es el ejemplo vivo de conversión de seguidores a consumidores."
                },
                mundo:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Mundo.jpg",
                    empresa: "Mundo",
                    servicio: "Imagen de marca",
                    brevedescripcion: "Mundo es una microempresa de renta de autos pero el ser pequeña no le impide verse mejor que sus grades competidores."
                },
                pinkparty :{
                    tipo: "marketing",
                    imagen: "res/img/recursos/Pink Party.jpg",
                    empresa: "Pink Party",
                    servicio: "Social media",
                    brevedescripcion: "Con Pink Party hicimos de todo: rebranding, fotografía, social media y una que otra locura publicitaria."
                },
                isnaya :{
                    tipo: "web",
                    imagen: "res/img/recursos/Isnaya.jpg",
                    empresa: "Isnaya",
                    servicio: "Aplicación Web",
                    brevedescripcion: "Isnaya se encarga de imprimir un mundo de colores pero para eso deben llevar un detallado inventario para lo cual fuimos de gran ayuda."
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
                    brevedescripcion: "El Simposio de Diabetes del Hospital Militar en su décima edición tuvo por primera vez una imágen de marca de la cual fuimos responsables."
                },
                melany:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Melany.jpg",
                    empresa: "Melany",
                    servicio: "Imagen de marca",
                    brevedescripcion: "Melany el salón oficial de BigBang, fué más que un honor realizar su imagen corporativa y el resultado nos encantó."
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
                    brevedescripcion: "Samcora es una empresa muy femenina pero capaz de triunfar en el duro rubro de la construcción y su imagen refleja es esencia."
                }, 
                lindocruz:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/LindoCruz.jpg",
                    empresa: "Lindo Cruz",
                    servicio: "Imagen de marca",
                    brevedescripcion: "Ubicada en Tapachula, Chiapas. Lindo Cruz es un contructora con una visión muy clara de innovación y calidad."
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
                    brevedescripcion: "FAREM Estelí es el recinto universitario más importante del norte de Nicaragua y nosotros hicimos su web."
                },                
                lacolonia:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/La Colonia.jpg",
                    empresa: "La Colonia",
                    servicio: "Mundial 2018",
                    brevedescripcion: "El trabajo de redes que hemos realizado con Jaliskos es más que gratificante. Es el ejemplo vivo de conversión de seguidores a consumidores."
                },                
                jaliskos:{
                    tipo: "marketing",
                    imagen: "res/img/recursos/Jaliskos SM.jpg",
                    empresa: "Jaliskos",
                    servicio: "Social media",
                    brevedescripcion: " El trabajo de redes que hemos realizado con Jaliskos es más que gratificante. Es el ejemplo vivo de conversión de seguidores a consumidores."
                },
                mundo:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Mundo.jpg",
                    empresa: "Mundo",
                    servicio: "Branding",
                    brevedescripcion: "Mundo es una microempresa de renta de autos pero el ser pequeña no le impide verse mejor que sus grades competidores."
                },
                pinkparty :{
                    tipo: "marketing",
                    imagen: "res/img/recursos/Pink Party.jpg",
                    empresa: "Pink Party",
                    servicio: "Social media",
                    brevedescripcion: "Con Pink Party hicimos de todo: rebranding, fotografía, social media y una que otra locura publicitaria."
                },
                isnaya :{
                    tipo: "web",
                    imagen: "res/img/recursos/Isnaya.jpg",
                    empresa: "Isnaya",
                    servicio: "Web aplication",
                    brevedescripcion: "Isnaya se encarga de imprimir un mundo de colores pero para eso deben llevar un detallado inventario para lo cual fuimos de gran ayuda."
                },
                cynthias:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Cynthias.jpg",
                    empresa: "Cynthias",
                    servicio: "Branding",
                    brevedescripcion: "Cynthias es uno de esos negocios emprendedores los cuales nos motivan mucho a realiza su imagen de marca."
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
                    brevedescripcion: "Fuimos los elegidos para dar vida a la campaña de prevención de explotación sexual comercial infantil en Nicaragua."
                },
                hospitalmilitar:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Hosptal Militar.jpg",
                    empresa: "Hospital Militar:",
                    servicio: "Simposio Diabetes",
                    brevedescripcion: "El Simposio de Diabetes del Hospital Militar en su décima edición tuvo por primera vez una imágen de marca de la cual fuimos responsables."
                },
                melany:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Melany.jpg",
                    empresa: "Melany",
                    servicio: "Branding",
                    brevedescripcion: "Melany el salón oficial de BigBang, fué más que un honor realizar su imagen corporativa y el resultado nos encantó."
                },
                jaliskos2:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Jaliskos.jpg",
                    empresa: "Jaliskos",
                    servicio: "Branding",
                    brevedescripcion: "Jalisko’s no es como cualquier taquería de Estelí, Jalisko’s es una verdadera marca."
                },
                apiflor:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/ApiFlor.jpg",
                    empresa: "ApiFlor",
                    servicio: "Branding",
                    brevedescripcion: "Apiflor es nuestro primer acercamiento a la apicultura, fué un proyecto tan retador como satisfactorio."
                }, 
                samcora:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/Samcora.jpg",
                    empresa: "Samcora",
                    servicio: "Branding",
                    brevedescripcion: "Samcora es una empresa muy femenina pero capaz de triunfar en el duro rubro de la construcción y su imagen refleja es esencia."
                }, 
                lindocruz:{
                    tipo: "disenio",
                    imagen: "res/img/recursos/LindoCruz.jpg",
                    empresa: "Lindo Cruz",
                    servicio: "Branding",
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
