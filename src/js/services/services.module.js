import TestService from './test.service';
import servicioService from './servicio.service';
import integrantesService from './integrantes.service';

const services = angular
    .module('services', [])
    .service('TestService', TestService)
    .service('servicioService', servicioService)
    .service('integrantesService', integrantesService)
    .name;

export default services;
