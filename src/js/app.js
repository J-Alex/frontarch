import 'jquery';
//import 'bootstrap/dist/js/bootstrap';


import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import services from './services/services.module';
import uiRouting from './uirouting/ui.routing';
import transitionRunnner from './stateTransition/transition.runner';

import rootComponent from './components/rootComponent/root.component';
import common from './components/commonComponent/common.module';
import components from './components/components.module';

angular
    .module('app', [services, uiRouter, common, components])
    .config(uiRouting)
    .run(transitionRunnner)
    .controller('headCtrl', ($window, $rootScope, $state, $trace, $transitions, I18N) => {
        'ngInject';

        console.log("SEO CONTROLADOR");
        $transitions.onStart({},function(transition){
            console.log(`${transition.to().name}${I18N.val}`);
        });
    })
    .constant('API', 'http://api.express-jenniercruz.c9users.io')
    .component('rootComponent', rootComponent)
    .constant('I18N', {
        val: undefined,
        setLang: function(value) { return this.val = value }
    })
    .name;
