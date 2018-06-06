
import culturaCtrl from './cultura.ctrl.js';
export const culturaComponent = {
    controller: culturaCtrl,
    controllerAs: 'cultura',
    templateUrl: './partials/cultura/cultura.component.html',
    bindings: {
        cultura: '<'
    }
};
