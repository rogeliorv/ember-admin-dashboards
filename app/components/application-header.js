import Ember from 'ember';

export default Ember.Component.extend({

	session: Ember.inject.service('session'),
	actions: {
		invalidateSession() {
			this.get('session').invalidate();
		}
	},
	
	tagName: 'header',
	classNames: ['main-header'],
});
