
class integrantesService {
    constructor($http){
        'ngInject'
        this.$http = $http;
    }
    guardarIntegrantes(integrantes) {
        return this.$http({ method: "POST", url: '/integrantes', data: integrantes })
            .then( res => res.data )
            .catch( err => console.log(err) );
    }
    obtenerIntegrantes(idioma) {
        return this.$http({ method: "GET", url: 'api/'+idioma+'.json' })
            .then( res => res.data )
            .catch( err => console.log(err) );
    }
    actualizarIntegrantes(integrantes) {
        return this.$http({ method: "PUT", url: '/integrantes', data: integrantes })
            .then( res => res.data )
            .catch( err => console.log(err) );
    }
    eliminarIntegrantes(id) {
        return this.$http({ method: "DELETE", url: `/integrantes/${id}` })
            .then( res => res.data )
            .catch( err => console.log(err) );
    }
    obtenerUnoIntegrantes(id) {
        return this.$http({ method: "GET", url: `/integrantes/${id}` })
            .then( res => res.data )
            .catch( err => console.log(err) );
    }
}
export default integrantesService;
