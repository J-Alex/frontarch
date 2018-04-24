import { homeComponent } from './homeComponent/home.component';
import { contactoComponent } from './contactoComponent/contacto.component';
import { serviciosComponent } from './serviciosComponent/servicios.component';
import { servicioDevComponent } from './servicioDevComponent/servicioDev.component';
import { servicioDesignComponent } from './servicioDesignComponent/servicioDesign.component';
import { servicioMarketingComponent } from './servicioMarketingComponent/servicioMarketing.component';
import { portafolioComponent } from './portafolioComponent/portafolio.component';
import { servicioComponent} from './servicioComponent/servicio.component';
import { portafolioDevComponent} from './portafolioDevComponent/portafolioDev.component';
import { culturaComponent} from './culturaComponent/cultura.component';

const components = angular
    .module('components',[])
    .component('homeComponent', homeComponent)
    .component('contactoComponent', contactoComponent)
    .component('serviciosComponent', serviciosComponent)
    .component('servicioDevComponent', servicioDevComponent)
    .component('servicioDesignComponent', servicioDesignComponent)
    .component('servicioMarketingComponent', servicioMarketingComponent)
    .component('portafolioComponent', portafolioComponent)
    .component('servicioComponent', servicioComponent)
    .component('portafolioDevComponent', portafolioDevComponent)
    .component('culturaComponent', culturaComponent)
    .name;

export default components;
