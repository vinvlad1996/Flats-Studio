import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';

const settings = {
  apiKey: '01c7d505-181c-4237-9b26-baf2be528cd0',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
};

Vue.use(YmapPlugin, settings);
