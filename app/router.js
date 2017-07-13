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
});
