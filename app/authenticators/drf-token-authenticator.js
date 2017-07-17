import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';

export default Base.extend({
  restore(data) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(username, password) {
    return new Ember.RSVP.Promise((resolve, reject) => {

      console.log(username);
      console.log(password);

      Ember.$.ajax({
        url: config.host + '/api-auth-token/',
        type: 'POST',
        data: JSON.stringify({
          username: username,
          password: password
        }),
        contentType: 'application/json;charset=utf-8',
        dataType: 'json'
      }).then((response) => {
        Ember.run(function() {
          console.log("YAY");
          console.log(response.token);
          resolve({
            token: response.token
          });
        });
      }, (xhr, status, error) => {
        var response = xhr.responseText;
        Ember.run(function() {
          reject(response);
        });
      });
    });
  },
});
