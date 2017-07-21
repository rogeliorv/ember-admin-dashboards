import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
      firstName: 'first_name',
      lastName: 'last_name',
      isSuperuser: 'is_superuser',
      isStaff: 'is_staff',
      isActive: 'is_active'
    }
});
