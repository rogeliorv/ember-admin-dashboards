import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
      username: 'username',
      firstName: 'first_name',
      lastName: 'last_name',
      email: 'email',
      active: 'active',
      isSuperuser: 'is_superuser',
      isStaff: 'is_staff',
      isActive: 'is_active',
      dateJoined: 'date_joined',
      lastLogin: 'last_login'
    }
});
