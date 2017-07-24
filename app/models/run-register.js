import DS from 'ember-data';

export default DS.Model.extend({

  time: DS.attr('number'),
  distance: DS.attr('number'),
  date: DS.attr('string'),
  location: DS.attr('string'),
  details: DS.attr('string'),
  userId: DS.attr('number'),
  speed: Ember.computed('time', 'distance', function() {

    let time = this.get('time') / 60.0;
    let distance = this.get('distance');
    let result = distance / time;
    return result;
  }),
  speedFixed: Ember.computed('speed', function() {
    return this.get('speed').toFixed(2);
  })
});
