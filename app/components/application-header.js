import Ember from 'ember';

export default Ember.Component.extend({

	session: Ember.inject.service('session'),
	currentUser: Ember.inject.service('currentUser'),


	friendlyName: Ember.computed('currentUser.user.firstName', 'currentUser.user.lastName', 'currentUser.user.username', function() {

		// Try to get the name by combining first and last name. If none, then show the username
		let firstName = this.get('currentUser.user.firstName');
		let lastName = this.get('currentUser.user.lastName');
		var friendlyName  = (`${firstName} ${lastName}`).trim();
		return friendlyName ? friendlyName : this.get('currentUser.user.username');
	}),

	actions: {
		invalidateSession() {
			this.get('session').invalidate();
		}
	},

	tagName: 'header',
	classNames: ['main-header'],
});
