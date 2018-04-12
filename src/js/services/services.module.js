import TestService from './test.service';
import servicioService from './servicio.service';

const services = angular
    .module('services', [])
    .service('TestService', TestService)
    .service('servicioService', servicioService)
    .name;

export default services;
