import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({

  actions: {
    register() {
      let {username, email, password, confirm_password} = this.getProperties(
        'username',
        'email',
        'password',
        'confirm_password'
      );


      Ember.$.ajax({
        url: config.host + '/rest-auth/registration/',
        type: 'POST',
        data: JSON.stringify({
          username: username,
          email: email,
          password1: password,
          password2: confirm_password
        }),
        contentType: 'application/json;charset=utf-8',
        dataType: 'json'
      }).then((response) => {
        this.set('signupComplete', true);
      }, (xhr, status, error) => {
        this.set('errorMessages', xhr.responseText);
      });
    }
  }
});
