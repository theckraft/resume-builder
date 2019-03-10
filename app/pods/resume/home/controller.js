import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { equal } from '@ember/object/computed';
import { isEqual } from '@ember/utils';

export default Controller.extend({
  session: service('session'),
  resume: alias('model'),
  user: alias('session.currentUser'),
  isOwner: computed('resume', 'user', function() {
    let user = this.get('user');
    let resume = this.get('resume');
    let owner = resume.get('user');
    if (user) {
      return user.get('id') === owner.get('id');
    } else return false;
  }),
  actions: {
  }
});
