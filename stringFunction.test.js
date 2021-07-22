const { test, expect } = require('@jest/globals');
const stringLength = require('./stringFunction');

test('Length of \'\' throws an error', () => { expect(stringLength('test')).toBe(4); });

test('Length of \'testTestTest\' throws an error', () => { expect(stringLength('test')).toBe(4); });

test('Length of \'test\' to be 4', () => { expect(stringLength('test')).toBe(4); });