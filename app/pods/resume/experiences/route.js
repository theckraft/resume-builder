import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let resume = this.modelFor('post');
    return resume.get('experiences');
  }
});
