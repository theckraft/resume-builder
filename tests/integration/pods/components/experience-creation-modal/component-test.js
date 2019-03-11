import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('experience-creation-modal', 'Integration | Component | experience creation modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{experience-creation-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#experience-creation-modal}}
      template block text
    {{/experience-creation-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
