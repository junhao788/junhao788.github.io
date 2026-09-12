import assert from 'node:assert/strict';
import test from 'node:test';

import { getHeroMode, getNavigationMode } from '../src/lib/responsive-layout.mjs';

test('keeps the compact top navigation through tablet widths', () => {
  assert.equal(getNavigationMode(320), 'compact');
  assert.equal(getNavigationMode(768), 'compact');
  assert.equal(getNavigationMode(1023), 'compact');
});

test('switches to navigation rails at the desktop breakpoint', () => {
  assert.equal(getNavigationMode(1024), 'rails');
  assert.equal(getNavigationMode(1440), 'rails');
});

test('uses a compact hero composition on short phone screens', () => {
  assert.equal(getHeroMode(320, 700), 'compact');
  assert.equal(getHeroMode(390, 844), 'mobile');
});

test('keeps the hero in desktop composition at the rail breakpoint', () => {
  assert.equal(getHeroMode(1024, 700), 'desktop');
});
