import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  description: DS.attr('string'),
  experiences: DS.hasMany('resume'),
  skills: DS.hasMany('skill'),
  user: DS.belongsTo('user', { inverse: 'resumes' })
});
