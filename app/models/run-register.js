import DS from 'ember-data';

export default DS.Model.extend({
  details: DS.attr('string'),
  time: DS.attr('number'),
  distance: DS.attr('number'),
  date: DS.attr('string'),
});
