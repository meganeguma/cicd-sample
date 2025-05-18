import assert from 'node:assert';
import { describe, it } from 'node:test';
import { add, greet } from '../src/main.js';

describe('main', () => {
  it('greet', () => {
    assert.strictEqual(greet('World'), 'Hello, World!');
  });
  it('add', () => {
    assert.strictEqual(add(1, 2), 3);
  });
});
