import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: RunRegister', {
  beforeEach: function() {
    application = startApp();
    originalConfirm = window.confirm;
    window.confirm = function() {
      confirmCalledWith = [].slice.call(arguments);
      return true;
    };
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
    window.confirm = originalConfirm;
    confirmCalledWith = null;
  }
});

test('visiting /runRegisters without data', function(assert) {
  visit('/runRegisters');

  andThen(function() {
    assert.equal(currentPath(), 'runRegisters.index');
    assert.equal(find('#blankslate').text().trim(), 'No Runregisters found');
  });
});

test('visiting /runRegisters with data', function(assert) {
  server.create('runRegister');
  visit('/runRegisters');

  andThen(function() {
    assert.equal(currentPath(), 'runRegisters.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new runRegister', function(assert) {
  visit('/runRegisters');
  click('a:contains(New Runregister)');

  andThen(function() {
    assert.equal(currentPath(), 'runRegisters.new');

    fillIn('label:contains(Details) input', 'MyString');
    fillIn('label:contains(Time) input', 'MyString');
    fillIn('label:contains(Date) input', new Date());
    fillIn('label:contains(Finished) input', false);

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing runRegister', function(assert) {
  server.create('runRegister');
  visit('/runRegisters');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'runRegisters.edit');

    fillIn('label:contains(Details) input', 'MyString');
    fillIn('label:contains(Time) input', 'MyString');
    fillIn('label:contains(Date) input', new Date());
    fillIn('label:contains(Finished) input', false);

    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing runRegister', function(assert) {
  server.create('runRegister');
  visit('/runRegisters');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'runRegisters.show');

    assert.equal(find('p strong:contains(Details:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Time:)').next().text(), 'MyString');
    assert.equal(find('p strong:contains(Date:)').next().text(), new Date());
    assert.equal(find('p strong:contains(Finished:)').next().text(), false);
  });
});

test('delete a runRegister', function(assert) {
  server.create('runRegister');
  visit('/runRegisters');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'runRegisters.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
