import Ember from 'ember';

export default Ember.Component.extend({

	session: Ember.inject.service('session'),
  currentUser: Ember.inject.service('current-user'),

	actions: {
		invalidateSession() {
			this.get('session').invalidate();
		}
	},

	tagName: 'header',
	classNames: ['main-header'],
});
