import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  password: DS.attr('string'),
  email: DS.attr('string'),
  active: DS.attr('boolean'),
  isSuperuser: DS.attr('boolean'),
  isActive: DS.attr('boolean'),
  isStaff: DS.attr('boolean'),
  dateJoined: DS.attr('date'),
  lastLogin: DS.attr('date'),
});
