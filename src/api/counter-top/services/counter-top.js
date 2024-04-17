'use strict';

/**
 * counter-top service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::counter-top.counter-top');
