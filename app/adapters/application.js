import DS from 'ember-data';
import config from './config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.host,
  namespace: 'api',
});
