import type { Schema, Attribute } from '@strapi/strapi';

export interface ConfigItemConfigItem extends Schema.Component {
  collectionName: 'components_config_item_config_items';
  info: {
    displayName: 'configItem';
    description: '';
  };
  attributes: {
    module: Attribute.Relation<
      'config-item.config-item',
      'oneToOne',
      'api::module.module'
    >;
    hasCounterTop: Attribute.Boolean & Attribute.DefaultTo<false>;
    price: Attribute.Integer;
  };
}

export interface ModuleOptionsCounterTops extends Schema.Component {
  collectionName: 'components_module_options_counter_tops';
  info: {
    displayName: 'counterTops';
    description: '';
  };
  attributes: {
    Color: Attribute.Enumeration<
      [
        'Keramik Calacatta Schwarz',
        'Keramik Calacatta Gold Matt',
        'Keramik Eternal Gold Matt',
        'Keramik Ivory Cement',
        'Keramik Marble Gray Matt',
        'Keramik Marble Laurant Matt',
        'Keramik Marble Marquina Matt',
        'Keramik Metal Burnished Matt',
        'Naturstein Granit Nero Assoluto',
        'Naturstein Granit Nero Assoluti PEC'
      ]
    >;
    render: Attribute.Media;
    topView: Attribute.Media;
  };
}

export interface ModuleOptionsModuleOptions extends Schema.Component {
  collectionName: 'components_module_options_module_options';
  info: {
    displayName: 'moduleOptions';
    description: '';
  };
  attributes: {
    thumbnail: Attribute.Media;
    render: Attribute.Media;
    topView: Attribute.Media;
    color: Attribute.Enumeration<
      [
        'Anthrazit-Metallic',
        'Verkehrswei\u00DF',
        'Tiefschwarz',
        'Eisenglimmer',
        'Crystal Lounge',
        'Timber Essence',
        'Cream Fawn',
        'Blue Tan',
        'Pure Essence Beige',
        'Spiritual Harmony'
      ]
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'config-item.config-item': ConfigItemConfigItem;
      'module-options.counter-tops': ModuleOptionsCounterTops;
      'module-options.module-options': ModuleOptionsModuleOptions;
    }
  }
}
