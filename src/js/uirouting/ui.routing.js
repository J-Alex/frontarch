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
