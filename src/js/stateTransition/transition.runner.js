const transitionRunner = ($window, $rootScope, $state, $trace, I18N) => {
    'ngInject';
    
    /*$trace.enable('TRANSITION');
    
    $rootScope.$on('$stateChangeStart', (evt, toState, toParams, fromState, fromParams) => {
        console.log("$stateChangeStart " + fromState.name + JSON.stringify(fromParams) + " -> " + toState.name + JSON.stringify(toParams));
    });
    $rootScope.$on('$stateChangeSuccess', () => {
        console.log('test');
        console.log("$stateChangeSuccess " + fromState.name + JSON.stringify(fromParams) + " -> " + toState.name + JSON.stringify(toParams));
    });
    $rootScope.$on('$stateChangeError', () => {
        console.log("$stateChangeError " + fromState.name + JSON.stringify(fromParams) + " -> " + toState.name + JSON.stringify(toParams));
    });*/
    
    if (!$window.localStorage['I18N']){
        //console.log("NO existe y es: " + $window.localStorage['I18N']);

        let userLang = navigator.language || navigator.userLanguage;
        //console.log("The language is: " + navigator.language +" "+ navigator.userLanguage);
        if(userLang == 'es' || userLang == 'es-ES'){
            I18N.setLang('ESP');
            $window.localStorage['I18N'] = 'ESP';
        } else {
            I18N.setLang('ENG');
            $window.localStorage['I18N'] = 'ENG';
        }
        //console.log("The language is: " + userLang +" "+ I18N.val);
    } else {
        I18N.setLang($window.localStorage['I18N']);
        //console.log("YA Existe! y es: " + $window.localStorage['I18N']);
    }
   
};

export default transitionRunner;
