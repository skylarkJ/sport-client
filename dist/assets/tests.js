'use strict';

define('sport-highlights/tests/adapters/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('sport-highlights/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('sport-highlights/tests/components/change-password-form.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/change-password-form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/change-password-form.js should pass jshint.');
  });
});
define('sport-highlights/tests/components/component-favorite.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/component-favorite.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/component-favorite.js should pass jshint.\ncomponents/component-favorite.js: line 9, col 9, Missing semicolon.\n\n1 error');
  });
});
define('sport-highlights/tests/components/component-highlight.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/component-highlight.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/component-highlight.js should pass jshint.');
  });
});
define('sport-highlights/tests/components/component-search.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/component-search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/component-search.js should pass jshint.');
  });
});
define('sport-highlights/tests/components/email-input.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/email-input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/email-input.js should pass jshint.');
  });
});
define('sport-highlights/tests/components/hamburger-menu.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/hamburger-menu.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/hamburger-menu.js should pass jshint.');
  });
});
define('sport-highlights/tests/components/my-application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/my-application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/my-application.js should pass jshint.');
  });
});
define('sport-highlights/tests/components/navbar-header.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/navbar-header.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/navbar-header.js should pass jshint.');
  });
});
define('sport-highlights/tests/components/password-confirmation-input.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/password-confirmation-input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/password-confirmation-input.js should pass jshint.');
  });
});
define('sport-highlights/tests/components/password-input.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/password-input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/password-input.js should pass jshint.');
  });
});
define('sport-highlights/tests/components/sign-in-form.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/sign-in-form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/sign-in-form.js should pass jshint.');
  });
});
define('sport-highlights/tests/components/sign-up-form.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/sign-up-form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/sign-up-form.js should pass jshint.');
  });
});
define('sport-highlights/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('sport-highlights/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('sport-highlights/tests/helpers/flash-message', ['exports', 'ember', 'ember-cli-flash/flash/object'], function (exports, _ember, _emberCliFlashFlashObject) {
  var K = _ember['default'].K;

  _emberCliFlashFlashObject['default'].reopen({ init: K });
});
define('sport-highlights/tests/helpers/flash-message.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/flash-message.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/flash-message.js should pass jshint.');
  });
});
define('sport-highlights/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'sport-highlights/tests/helpers/start-app', 'sport-highlights/tests/helpers/destroy-app'], function (exports, _qunit, _sportHighlightsTestsHelpersStartApp, _sportHighlightsTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _sportHighlightsTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _sportHighlightsTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('sport-highlights/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('sport-highlights/tests/helpers/resolver', ['exports', 'sport-highlights/resolver', 'sport-highlights/config/environment'], function (exports, _sportHighlightsResolver, _sportHighlightsConfigEnvironment) {

  var resolver = _sportHighlightsResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _sportHighlightsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _sportHighlightsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('sport-highlights/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('sport-highlights/tests/helpers/start-app', ['exports', 'ember', 'sport-highlights/app', 'sport-highlights/config/environment'], function (exports, _ember, _sportHighlightsApp, _sportHighlightsConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _sportHighlightsConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _sportHighlightsApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('sport-highlights/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('sport-highlights/tests/initializers/text-field.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | initializers/text-field.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/text-field.js should pass jshint.');
  });
});
define('sport-highlights/tests/integration/components/change-password-form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('change-password-form', 'Integration | Component | change password form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'vzv/UbXi',
      'block': '{"statements":[["append",["unknown",["change-password-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'W+lopJXu',
      'block': '{"statements":[["text","\\n"],["block",["change-password-form"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sport-highlights/tests/integration/components/change-password-form-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/change-password-form-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/change-password-form-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/integration/components/component-favorite-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('component-favorite', 'Integration | Component | component favorite', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'NXIu866L',
      'block': '{"statements":[["append",["unknown",["component-favorite"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'oHdxP+0R',
      'block': '{"statements":[["text","\\n"],["block",["component-favorite"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sport-highlights/tests/integration/components/component-favorite-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/component-favorite-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/component-favorite-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/integration/components/component-highlight-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('component-highlight', 'Integration | Component | component highlight', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'xEJXhRBo',
      'block': '{"statements":[["append",["unknown",["component-highlight"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'AK8WQL6v',
      'block': '{"statements":[["text","\\n"],["block",["component-highlight"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sport-highlights/tests/integration/components/component-highlight-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/component-highlight-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/component-highlight-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/integration/components/component-pagefav-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('component-pagefav', 'Integration | Component | component pagefav', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '/dC3+Ez9',
      'block': '{"statements":[["append",["unknown",["component-pagefav"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '+7Ls4MPC',
      'block': '{"statements":[["text","\\n"],["block",["component-pagefav"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sport-highlights/tests/integration/components/component-pagefav-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/component-pagefav-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/component-pagefav-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/integration/components/component-search-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('component-search', 'Integration | Component | component search', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'YUQqlxKI',
      'block': '{"statements":[["append",["unknown",["component-search"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'xS8nZ7/A',
      'block': '{"statements":[["text","\\n"],["block",["component-search"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sport-highlights/tests/integration/components/component-search-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/component-search-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/component-search-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/integration/components/email-input-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('email-input', 'Integration | Component | email input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '6ZlF6XfM',
      'block': '{"statements":[["append",["unknown",["email-input"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'YM0cFao3',
      'block': '{"statements":[["text","\\n"],["block",["email-input"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sport-highlights/tests/integration/components/email-input-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/email-input-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/email-input-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/integration/components/hamburger-menu-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('hamburger-menu', 'Integration | Component | hamburger menu', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '6jCz0Egi',
      'block': '{"statements":[["append",["unknown",["hamburger-menu"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '+8WkWzqb',
      'block': '{"statements":[["text","\\n"],["block",["hamburger-menu"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sport-highlights/tests/integration/components/hamburger-menu-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/hamburger-menu-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/hamburger-menu-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/integration/components/my-application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('my-application', 'Integration | Component | my application', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'KxgFQCKC',
      'block': '{"statements":[["append",["unknown",["my-application"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'kguz0DrD',
      'block': '{"statements":[["text","\\n"],["block",["my-application"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sport-highlights/tests/integration/components/my-application-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/my-application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/my-application-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/integration/components/navbar-header-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('navbar-header', 'Integration | Component | navbar header', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'jsAxs+PS',
      'block': '{"statements":[["append",["unknown",["navbar-header"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'UCOelAVk',
      'block': '{"statements":[["text","\\n"],["block",["navbar-header"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sport-highlights/tests/integration/components/navbar-header-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/navbar-header-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/navbar-header-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/integration/components/password-confirmation-input-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('password-confirmation-input', 'Integration | Component | password confirmation input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'iIL5Yl+z',
      'block': '{"statements":[["append",["unknown",["password-confirmation-input"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'tkVExn4c',
      'block': '{"statements":[["text","\\n"],["block",["password-confirmation-input"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sport-highlights/tests/integration/components/password-confirmation-input-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/password-confirmation-input-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/password-confirmation-input-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/integration/components/password-input-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('password-input', 'Integration | Component | password input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'qKa4/eNs',
      'block': '{"statements":[["append",["unknown",["password-input"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'zLQB4Ctb',
      'block': '{"statements":[["text","\\n"],["block",["password-input"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sport-highlights/tests/integration/components/password-input-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/password-input-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/password-input-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/integration/components/sign-in-form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('sign-in-form', 'Integration | Component | sign in form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'iWgfKNlK',
      'block': '{"statements":[["append",["unknown",["sign-in-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '0kWL1c/7',
      'block': '{"statements":[["text","\\n"],["block",["sign-in-form"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sport-highlights/tests/integration/components/sign-in-form-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/sign-in-form-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/sign-in-form-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/integration/components/sign-up-form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('sign-up-form', 'Integration | Component | sign up form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'oWx+CZzU',
      'block': '{"statements":[["append",["unknown",["sign-up-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '2eGtA79t',
      'block': '{"statements":[["text","\\n"],["block",["sign-up-form"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('sport-highlights/tests/integration/components/sign-up-form-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/sign-up-form-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/sign-up-form-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/models/favorite.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/favorite.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/favorite.js should pass jshint.');
  });
});
define('sport-highlights/tests/models/user.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass jshint.');
  });
});
define('sport-highlights/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('sport-highlights/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('sport-highlights/tests/routes/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('sport-highlights/tests/routes/change-password.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/change-password.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/change-password.js should pass jshint.');
  });
});
define('sport-highlights/tests/routes/favorites.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/favorites.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/favorites.js should pass jshint.');
  });
});
define('sport-highlights/tests/routes/sign-in.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/sign-in.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sign-in.js should pass jshint.');
  });
});
define('sport-highlights/tests/routes/sign-up.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/sign-up.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sign-up.js should pass jshint.');
  });
});
define('sport-highlights/tests/routes/users.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/users.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users.js should pass jshint.');
  });
});
define('sport-highlights/tests/serializers/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass jshint.');
  });
});
define('sport-highlights/tests/services/ajax.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/ajax.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/ajax.js should pass jshint.');
  });
});
define('sport-highlights/tests/services/auth.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/auth.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/auth.js should pass jshint.');
  });
});
define('sport-highlights/tests/storages/auth.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | storages/auth.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'storages/auth.js should pass jshint.');
  });
});
define('sport-highlights/tests/test-helper', ['exports', 'sport-highlights/tests/helpers/resolver', 'sport-highlights/tests/helpers/flash-message', 'ember-qunit'], function (exports, _sportHighlightsTestsHelpersResolver, _sportHighlightsTestsHelpersFlashMessage, _emberQunit) {

  (0, _emberQunit.setResolver)(_sportHighlightsTestsHelpersResolver['default']);
});
define('sport-highlights/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('sport-highlights/tests/unit/adapters/application-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/adapters/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/adapters/auth-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:auth', 'Unit | Adapter | auth', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('sport-highlights/tests/unit/adapters/auth-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/adapters/auth-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/auth-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/controllers/controller-search-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:controller-search', 'Unit | Controller | controller search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('sport-highlights/tests/unit/controllers/controller-search-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/controller-search-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/controller-search-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/initializers/text-field-test', ['exports', 'ember', 'ga-wdi-boston.ember-auth/initializers/text-field', 'qunit'], function (exports, _ember, _gaWdiBostonEmberAuthInitializersTextField, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | text field', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _gaWdiBostonEmberAuthInitializersTextField['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('sport-highlights/tests/unit/initializers/text-field-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/initializers/text-field-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/text-field-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/models/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('application', 'Unit | Model | application', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('sport-highlights/tests/unit/models/application-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/application-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/models/auth-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('auth', 'Unit | Model | auth', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('sport-highlights/tests/unit/models/auth-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/auth-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/auth-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/models/favorite-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('favorite', 'Unit | Model | favorite', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('sport-highlights/tests/unit/models/favorite-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/favorite-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/favorite-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/models/highlight-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('highlight', 'Unit | Model | highlight', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('sport-highlights/tests/unit/models/highlight-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/highlight-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/highlight-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/models/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('sport-highlights/tests/unit/models/user-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/user-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sport-highlights/tests/unit/routes/application-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/routes/change-password-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:change-password', 'Unit | Route | change password', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sport-highlights/tests/unit/routes/change-password-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/change-password-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/change-password-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/routes/favorites-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:favorites.js', 'Unit | Route | favorites.js', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sport-highlights/tests/unit/routes/favorites-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/favorites-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/favorites-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/routes/sign-in-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:sign-in', 'Unit | Route | sign in', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sport-highlights/tests/unit/routes/sign-in-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/sign-in-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sign-in-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/routes/sign-up-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:sign-up', 'Unit | Route | sign up', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sport-highlights/tests/unit/routes/sign-up-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/sign-up-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sign-up-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/routes/users-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:users', 'Unit | Route | users', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('sport-highlights/tests/unit/routes/users-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/users-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/users-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/serializers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('sport-highlights/tests/unit/serializers/application-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/serializers/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/serializers/auth-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('auth', 'Unit | Serializer | auth', {
    // Specify the other units that are required for this test.
    needs: ['serializer:auth']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('sport-highlights/tests/unit/serializers/auth-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/serializers/auth-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/auth-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/services/ajax-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:ajax', 'Unit | Service | ajax', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('sport-highlights/tests/unit/services/ajax-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/ajax-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/ajax-test.js should pass jshint.');
  });
});
define('sport-highlights/tests/unit/services/auth-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:auth', 'Unit | Service | auth', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('sport-highlights/tests/unit/services/auth-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/auth-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/auth-test.js should pass jshint.');
  });
});
require('sport-highlights/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
