import Component from '@ember/component';
import { computed } from '@ember/object';
import { alias, sort } from '@ember/object/computed';

export default Component.extend({
  //Element Attributes
  classNames: ['ui', 'cards'],
  //Computed Properties
  sortedExperiences: sort('experiences', function(a, b) {
    return 0;
  })
});
