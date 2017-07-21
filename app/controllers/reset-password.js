import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({

  errorMessages: null,

  actions: {
    resetPassword() {
      let email = this.get('email');

      Ember.$.ajax({
        url: config.host + '/rest-auth/password/reset/',
        type: 'POST',
        data: JSON.stringify({
          email: email,
        }),
        contentType: 'application/json;charset=utf-8',
        dataType: 'json'
      }).then((response) => {
        this.set('passwordResetComplete', true);
      }, (xhr, status, error) => {
        let errorObj = JSON.parse(xhr.responseText);
        console.log(errorObj.errors);
        this.set('errorMessages', errorObj.errors);
      });
    }
  }
});
