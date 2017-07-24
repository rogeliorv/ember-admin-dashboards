import Ember from 'ember';

export default Ember.Route.extend({

  model: function({userId}, _) {

    var modelResult = null;

    return this.store.query('runRegister', {
        filter: {
          userId: userId
        }
      }).then((queryResult) => {
        modelResult = queryResult.filter((runRegister) => String(runRegister.get('userId')) === userId);
        return this.store.findRecord('user', userId)
      }).then((userResult) => {
        modelResult.set('user', userResult);
        return modelResult;
      }).catch(() => {
        console.log("Could not get user + run registers data");
      });
  },

  setupController: function(controller, model) {
    controller.set('params', this.get('params'));
    this._super(controller, model);
  }

});
