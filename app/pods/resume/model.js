import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  description: DS.attr('string'),
  experiences: DS.hasMany('experience', { inverse: 'resume' }),
  skills: DS.hasMany('skill', { inverse: 'resume' }),
  user: DS.belongsTo('user', { inverse: 'resumes' })
});
