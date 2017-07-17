import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('index', {path:'/'});
  this.route('widgets');
  this.route('twitter');
  this.route('general-ui');
  this.route('comingsoon');
  this.route('ui-icons');
  this.route('ui-buttons');
  this.route('ui-timeline');
  this.route('ui-modals');

  // The URLS relevant for CRUD operations on a run register
  this.route('runRegisters', function() {
    this.route('new');

    this.route('edit', {
      path: ':runRegister_id/edit'
    });

    this.route('show', {
      path: ':runRegister_id'
    });
  });
  this.route('login');
});
