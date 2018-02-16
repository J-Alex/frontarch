import { homeComponent } from './homeComponent/home.component';
import { contactoComponent } from './contactoComponent/contacto.component';
import { serviciosComponent } from './serviciosComponent/servicios.component';
import { servicioDevComponent } from './servicioDevComponent/servicioDev.component';

const components = angular
    .module('components',[])
    .component('homeComponent', homeComponent)
    .component('contactoComponent', contactoComponent)
    .component('serviciosComponent', serviciosComponent)
    .component('servicioDevComponent', servicioDevComponent)
    .name;

export default components;
