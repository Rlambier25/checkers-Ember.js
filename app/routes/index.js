import Ember from 'ember';

export default Ember.Route.extend({
  // base: Ember.inject.service('firebase'),

  model() {
    // return Ember.RSVP.hash({
    //   test: firebase.database().ref('backgrounds/0').once('value', function(snapshot) {
    //       console.log(snapshot.val().color);
    //       // alert(snapshot.val().color);
    //       return snapshot.val().color;
    //     })
    // });

    // return Ember.RSVP.hash({
    //   test: this.get('base').myFirebaseRef.ref().once('value', function(snapshot) {
    //     alert(snapshot.val());
    //   })
    // });
  },

  actions: {
    refreshRoute() {
      // this.refresh();
    }
  }
});
