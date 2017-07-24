import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  currentUser: Ember.inject.service('current-user'),

  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    }
  },
  
  model: function() {
    return this.store.findAll('runRegister').then(
      (runRegisters) => {
        let currentUserId = String(this.get('currentUser.user.id'));
        return runRegisters.filter((runRegister) => String(runRegister.get('userId')) === currentUserId);
      }).catch(() => {
        console.log("Could not find records for run registers");
      });
  },

  afterModel(model, transition) {

    var averageRunDistance = 0.0;
    var averageRunTime = 0.0;
    var averageSpeed = 0.0;
    var bestSpeedRun = null;
    var worstSpeedRun = null;
    var bestTimeRun = null;
    var worstTimeRun = null;
    var bestDistanceRun = null;
    var worstDistanceRun = null;

    // Iterate over each run to get the best and worst for distance, time and speed
    // Sums the information to get the average distance and time too
    model.forEach((run) => {
      let time = run.get('time');
      let distance = run.get('distance');
      let speed = run.get('speed');

      bestSpeedRun = (bestSpeedRun === null || bestSpeedRun.get('speed') <= speed) ? run : bestSpeedRun;
      worstSpeedRun = (worstSpeedRun === null || worstSpeedRun.get('speed') >= speed) ? run : worstSpeedRun;

      bestDistanceRun = (bestDistanceRun === null || bestDistanceRun.get('distance') <= distance) ? run : bestDistanceRun;
      worstDistanceRun = (worstDistanceRun === null || worstDistanceRun.get('distance') >= distance) ? run : worstDistanceRun;

      bestTimeRun = (bestTimeRun === null || bestTimeRun.get('time') <= time) ? run : bestTimeRun;
      worstTimeRun = (worstTimeRun === null || worstTimeRun.get('time') >= time) ? run : worstTimeRun;

      averageRunTime += time;
      averageRunDistance += distance;
      averageSpeed += speed;
    });

    // Calculate the averages
    let totalRuns = model.get('length');
    averageRunTime = (averageRunTime / totalRuns).toFixed(2);
    averageRunDistance = (averageRunDistance / totalRuns).toFixed(2);
    averageSpeed = (averageSpeed / totalRuns).toFixed(2);

    // Set the information in a property inside the model
    model.set('summaryData',
    {
      bestSpeedRun,
      worstSpeedRun,
      bestDistanceRun,
      worstDistanceRun,
      bestTimeRun,
      worstTimeRun,
      averageRunTime,
      averageRunDistance,
      averageSpeed,
    });
  }
});
