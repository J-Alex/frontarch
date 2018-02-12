import { homeComponent } from './homeComponent/home.component';
import { contactoComponent } from './contactoComponent/contacto.component';
import { serviciosComponent } from './serviciosComponent/servicios.component';

const components = angular
    .module('components',[])
    .component('homeComponent', homeComponent)
    .component('contactoComponent', contactoComponent)
    .component('serviciosComponent', serviciosComponent)
    .name;

export default components;
