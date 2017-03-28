import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('component-pagefav', 'Integration | Component | component pagefav', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{component-pagefav}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#component-pagefav}}
      template block text
    {{/component-pagefav}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
