import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
      details: 'details',
      time: 'time',
      distance: 'distance',
      date: 'date',
      location: 'location',
      userId: 'user_id'
    }
});
