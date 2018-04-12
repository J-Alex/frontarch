
import servicioCtrl from './servicio.ctrl.js';
export const servicioComponent = {
    controller: servicioCtrl,
    controllerAs: 'servicio',
    templateUrl: './partials/servicio/servicio.component.html',
    bindings: {
        servicio: '<'
    }
};
