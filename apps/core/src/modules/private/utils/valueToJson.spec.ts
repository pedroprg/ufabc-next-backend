import assert from 'node:assert/strict';
import { valueToJson } from './valueToJson.js';

describe('modules.private.utils.valueToJson', () => {
  it('should parse payload and return JSON array', () => {
    const payload = 'key=[1,2,3];';
    const result = valueToJson(payload);

    assert.deepEqual(
      result,
      [1, 2, 3],
      'Parsed JSON array should match expected result',
    );
  });

  it('should handle max parameter correctly', () => {
    const payload = 'key=[1,2,3,4,5];';
    const max = 3;
    const result = valueToJson(payload, max);

    assert.deepEqual(
      result,
      [1, 2, 3],
      'Parsed JSON array should be truncated based on max parameter',
    );
  });

  it('should return an empty array for invalid payload', () => {
    const payload = 'invalid-payload';
    const result = valueToJson(payload);

    assert(
      result.length === 0,
      'Should return an empty array for invalid payload',
    );
  });

  it('should throw if data is not parsable', () => {
    const payload = 'key=not-an-array;';

    assert.throws(() => valueToJson(payload), 'Should throw if can`t parse');
  });

  it('should handle empty payload', () => {
    const payload = '';
    const result = valueToJson(payload);

    assert(
      result.length === 0,
      'Should return an empty array for empty payload',
    );
  });

  it('should handle missing max parameter', () => {
    const payload = 'key=[1,2,3,4,5];';
    const result = valueToJson(payload);

    assert.deepEqual(
      result,
      [1, 2, 3, 4, 5],
      'Parsed JSON array should not be truncated when max is not provided',
    );
  });
});
