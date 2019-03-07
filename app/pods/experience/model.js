import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  compant: DS.attr('string'),
  location: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  descriptors: DS.attr(),
  resume: DS.belongsTo('resume', { inverse: 'experiences' })
});
