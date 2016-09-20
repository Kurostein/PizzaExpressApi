'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('client service', function() {
  it('registered the clients service', () => {
    assert.ok(app.service('clients'));
  });
});
