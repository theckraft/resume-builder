import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  session: service('session'),
  classNames: ["ui", "large", "menu"],
  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', {
        provider: provider
      }).then(function(data) {
      });
    },
    signOut: function() {
      let session = this.get('session');
      let currentUser = session.get('currentUser');
      currentUser.unloadRecord();
      session.close();
    }
  }
});
