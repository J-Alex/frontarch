import { homeComponent } from './homeComponent/home.component';
import { contactoComponent } from './contactoComponent/contacto.component';
import { serviciosComponent } from './serviciosComponent/servicios.component';
import { servicioDevComponent } from './servicioDevComponent/servicioDev.component';
import { servicioDesignComponent } from './servicioDesignComponent/servicioDesign.component';

const components = angular
    .module('components',[])
    .component('homeComponent', homeComponent)
    .component('contactoComponent', contactoComponent)
    .component('serviciosComponent', serviciosComponent)
    .component('servicioDevComponent', servicioDevComponent)
    .component('servicioDesignComponent', servicioDesignComponent)
    .name;

export default components;
