import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard', { path: '/' });
  this.route('resume', { path: '' }, function() {
    this.route('experiences');
    this.route('skills');
    this.route('contact');
  });
});

export default Router;
