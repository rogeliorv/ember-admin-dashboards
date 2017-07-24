import Ember from 'ember';
import SaveModelMixin from 'emberdashboard4/mixins/users/save-model-mixin';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, SaveModelMixin, {
  currentUser: Ember.inject.service('current-user'),
});
