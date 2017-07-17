import Ember from 'ember';
import SaveModelMixin from 'emberdashboard4/mixins/run-registers/save-model-mixin';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(SaveModelMixin, AuthenticatedRouteMixin, {
});
