import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';

export default Route.extend({
  session: service(),
  model() {
    let session = this.get('session');
    if (session.get('isAuthenticated')) {
      let user = this.get('session.currentUser');
      return user.get('resumes');
    }
  }
});
