import DS from 'ember-data';

export default DS.Model.extend({
  details: DS.attr('string'),
  time: DS.attr('number'),
  date: DS.attr('date'),
  finished: DS.attr('boolean')
});
