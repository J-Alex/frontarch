const uiRouting = ($stateProvider,  $urlRouterProvider, $locationProvider) => {
    'ngInject';

    $stateProvider
        .state('/', {
            url: '/',
            component: 'homeComponent'
            //template: '<h1>HOMEINICIOINDEX</h1>'
        })
        .state('contacto', {
            url: '/contacto',
            component: 'contactoComponent'
            //template: '<h1>HOMEINICIOINDEX</h1>'
        })
        .state('servicios', {
            url: '/servicios',
            component: 'serviciosComponent'
        })
        .state('servicio', {
            url: '/servicio/{servicio}',
            component: 'servicioComponent',
            resolve: {
                servicio: function(servicioService,$transition$,$stateParams) {
                    'ngInject'
                    return servicioService.obtenerServicio($transition$.params().servicio) 
                }
            }
        })
        .state('servicioDev',{
            url:'/servicio-desarrollo',
            component: 'servicioDevComponent'

        })
        .state('servicioDesign',{
            url:'/servicio-disenio',
            component: 'servicioDesignComponent'

        })
        .state('servicioMarketing',{
            url:'/servicio-marketing',
            component: 'servicioMarketingComponent'

        })
        .state('portafolio',{
            url:'/portafolio',
            component: 'portafolioComponent'

        })
        /*.state('/home',{
            url: '/home',
            component: 'homeComponent',
            resolve: {
                test: function(TestService) {    
                    //'ngInject';

                    console.log(TestService.getData());
                }
            }
        });*/
        
    $urlRouterProvider
        .otherwise('/');
}

export default uiRouting;
