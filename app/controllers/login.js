import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),

  actions: {

    authenticate() {
      this.get('session').authenticate('authenticator:drf-token-authenticator',
        this.get('username'), this.get('password')).
        catch((reason) => {
          this.set('error', reason);
        })
    }
  }
});
