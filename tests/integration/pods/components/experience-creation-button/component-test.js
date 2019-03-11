import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('experience-creation-button', 'Integration | Component | experience creation button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{experience-creation-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#experience-creation-button}}
      template block text
    {{/experience-creation-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
