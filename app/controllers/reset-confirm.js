import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({

  errorMessages: null,

  passwordMatches: Ember.computed('new_password1', 'new_password2', function() {
    let new_password1 = this.get('new_password1');
    let new_password2 = this.get('new_password2');
    console.log(new_password1 === new_password2);
    return new_password1 === new_password2;
  }),

  actions: {
    resetPassword() {
      this.set('errorMessages', []);
      let new_password1 = this.get('new_password1');
      let new_password2 = this.get('new_password1');
      let uid = this.get('model.uid');
      let token = this.get('model.token');
      if(new_password1 !== new_password2) { return; }

      Ember.$.ajax({
        url: config.host + '/rest-auth/password/reset/confirm/',
        type: 'POST',
        data: JSON.stringify({
          new_password1,
          new_password2,
          uid,
          token
        }),
        contentType: 'application/json;charset=utf-8',
        dataType: 'json'
      }).then((response) => {
        this.set('passwordResetComplete', true);
      }, (xhr, status, error) => {
        let errorObj = JSON.parse(xhr.responseText);
        console.log(errorObj.errors);
        this.set('errorMessages', errorObj.errors);
      }).catch((error) => {
        this.set('errorMessages', [{detail: "Password could not be reset. Please contact an administrator."}])
      });
    }
  }
});
