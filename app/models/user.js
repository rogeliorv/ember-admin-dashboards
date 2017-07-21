import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  active: DS.attr('boolean'),
  isSuperuser: DS.attr(),
  boolean: DS.attr(),
  isActive: DS.attr('boolean'),
  isStaff: DS.attr('boolean')
});
