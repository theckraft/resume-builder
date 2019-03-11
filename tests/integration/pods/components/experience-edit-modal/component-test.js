import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('experience-edit-modal', 'Integration | Component | experience edit modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{experience-edit-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#experience-edit-modal}}
      template block text
    {{/experience-edit-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
