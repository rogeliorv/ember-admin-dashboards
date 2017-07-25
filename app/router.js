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

  this.route('runRegisters', function() {
    this.route('new', {
      path: 'user/:userId/new'
    });

    this.route('edit', {
      path: ':runRegister_id/edit'
    });

    this.route('show', {
      path: ':runRegister_id'
    });
    this.route('user', {
      path: 'user/:userId'
    });
  });
  this.route('login');
  this.route('register');
  this.route('resetPassword');
  this.route('resetConfirm', {
    path: 'reset/:uid/:token'
  });
  this.route('profile');
  this.route('users', function() {
    this.route('new');

    this.route('edit', {
      path: ':user_id/edit'
    });

    this.route('show', {
      path: ':user_id'
    });
  });
});
