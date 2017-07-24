import Ember from 'ember';
import SaveModelMixin from '../../mixins/run-registers/save-model-mixin';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(SaveModelMixin, AuthenticatedRouteMixin, {
  model: function({userId}, _) {
      let record = this.store.createRecord('runRegister');
      record.set('userId', userId);
      return record;
  }
});
