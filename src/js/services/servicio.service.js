
class servicioService {
    constructor($http){
        'ngInject'
        this.$http = $http;
    }
    guardarServicio(servicio) {
        return this.$http({ method: "POST", url: '/servicio', data: servicio })
            .then( res => res.data )
            .catch( err => console.log(err) );
    }
    obtenerServicio(servicio) {
        return this.$http({ method: "GET", url: 'api/'+servicio+'.json'})
            .then( res => res.data )
            .catch( err => console.log(err) );
    }
    actualizarServicio(servicio) {
        return this.$http({ method: "PUT", url: '/servicio', data: servicio })
            .then( res => res.data )
            .catch( err => console.log(err) );
    }
    eliminarServicio(id) {
        return this.$http({ method: "DELETE", url: `/servicio/${id}` })
            .then( res => res.data )
            .catch( err => console.log(err) );
    }
    obtenerUnoServicio(id) {
        return this.$http({ method: "GET", url: `/servicio/${id}` })
            .then( res => res.data )
            .catch( err => console.log(err) );
    }
}
export default servicioService;
