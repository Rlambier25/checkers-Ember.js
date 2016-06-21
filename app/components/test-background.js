import Ember from 'ember';

export default Ember.Component.extend ({
  // something: null,

  didRender() {
    firebase.database().ref('backgrounds/0').on('value', function(snapshot) {
      var temp = snapshot.val().color;

      //if test === 1, set color
      if(temp === 1) {
        Ember.$('#test').removeClass();
        Ember.$('#test').addClass('background1');
        // this.set('something', '1');
      } else { //else, set another color
        Ember.$('#test').removeClass();
        Ember.$('#test').addClass('background2');
        // this.set('something', '0');
      }
    })
  },

  willDestroyElement() {
    firebase.database().ref('backgrounds/0').off('value');
  },

  actions: {
    changeBackgroundto0() {
      firebase.database().ref('backgrounds/0').set({
        color: 0
      });
    },
    changeBackgroundto1() {
      firebase.database().ref('backgrounds/0').set({
        color: 1
      });
    }
  }

});
