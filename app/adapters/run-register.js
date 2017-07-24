import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForFindAll(query) {
    return this._super(...arguments);
  }
});
