import { module, test } from 'qunit';
import { setupTest } from 'client/tests/helpers';

module('Unit | Route | users', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:users');
    assert.ok(route);
  });
});
