import Ember from 'ember';
import SaveModelMixin from 'emberdashboard4/mixins/runRegisters/save-model-mixin';

export default Ember.Route.extend(SaveModelMixin, {
  model: function() {
    return this.store.createRecord('runRegister');
  }
});
