
class servicioService {
    constructor($http, I18N){
        'ngInject'
        this.$http = $http;
        this.I18N = I18N;
    }
    guardarServicio(servicio) {
        return this.$http({ method: "POST", url: '/servicio', data: servicio })
            .then( res => res.data )
            .catch( err => console.log(err) );
    }
    obtenerServicio(servicio) {
        if (this.I18N.val == 'ESP') {
            return this.$http({ method: "GET", url: 'api/'+servicio+'.json'})
                .then( res => res.data )
                .catch( err => console.log(err) );
        } else {
            return this.$http({ method: "GET", url: 'api/'+servicio+'_eng.json'})
                .then( res => res.data )
                .catch( err => console.log(err) );
        }
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
