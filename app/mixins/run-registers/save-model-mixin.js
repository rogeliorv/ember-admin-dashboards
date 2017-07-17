import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    save: function() {
      var route = this;
      console.log(this.currentModel);
      this.currentModel.save().then(function() {
        route.transitionTo('runRegisters');
      }, function() {
        console.log(arguments);
        console.log('Failed to save the model');
      });
    },

    willTransition() {
      this._super(...arguments);
      const record = this.controller.get('model');
      record.rollbackAttributes();
    },
  },

});
