import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),
  error: null,
  passwordErrors: null,
  usernameErrors: null,
  errorMessages: null,

  actions: {

    authenticate() {
      this.get('session').authenticate('authenticator:drf-token-authenticator',
        this.get('username'), this.get('password')).
        catch((reason) => {
          let error = JSON.parse(reason);
          this.set('error', reason);
          this.set('usernameErrors', error.username);
          this.set('passwordErrors', error.password);
          this.set('errorMessages', error.non_field_errors);

        })
    }
  }
});
