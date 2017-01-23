// Imports
import angular from 'angular';

import CarBrandResource from './car_brand.resource';
import ServiceTypeResource from './service_type.resource';

/**
 * @desc  Module initialize.
 *
 * @ngInject
 */
export default angular
  .module('app.resources', [])
  .service('CarBrandResource', CarBrandResource)
  .service('ServiceTypeResource', ServiceTypeResource)
  .name;