import UiModal from 'semantic-ui-ember/components/ui-modal';
import {
  computed
} from '@ember/object';
import {
  isEmpty
} from '@ember/utils';
import { set } from '@ember/object';
import Changeset from 'ember-changeset';


export default UiModal.extend({

  //Component Attributes
  classNames: [],
  changeset: null,
  //Computed Properties
  isInvalidForm: computed('changeset.firstName', 'changeset.lastName', function() {
    let firstName = this.get('changeset.firstName'),
      lastName = this.get('changeset.lastName');

    let isNull = isEmpty(firstName) ||
      isEmpty(lastName) ;

    return isNull;
  }),
  didInsertElement() {
    this._super(...arguments);
    let resume = this.get('resume');
    let validator = function({ key, newValue, oldValue, changes, content }) {
      return true;
    };
    let changeset = new Changeset(resume, validator);
    this.set('changeset', changeset);
  },
  actions: {
    submit(changeset) {
      return changeset.save();
    },
    rollback(changeset) {
      return changeset.rollback();
    },
    cancel: function() {}
  }
});
