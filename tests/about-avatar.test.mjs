import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'out', 'index.html'), 'utf8');
const aboutStart = html.indexOf('id="about"');
const experienceStart = html.indexOf('id="experience"', aboutStart);
const hero = html.slice(0, aboutStart);
const about = html.slice(aboutStart, experienceStart);

test('the About portrait uses the laptop avatar while the hero keeps its photo', () => {
  assert.ok(aboutStart > 0);
  assert.ok(experienceStart > aboutStart);
  assert.ok(hero.includes('alt="Jun Hao Lim Portrait"'), 'hero photo should remain');
  assert.ok(about.includes('junhao-chibi-laptop-transparent.png'), 'About avatar should load');
  assert.ok(about.includes('alt="Jun Hao Lim holding a laptop"'), 'About avatar should have useful alt text');
  assert.ok(!about.includes('portrait.png'), 'About should not retain the old portrait');
});

test('the hero shows the supplied colour portrait without a monochrome treatment', () => {
  const portrait = hero.match(/<img alt="Jun Hao Lim Portrait"[^>]*>/)?.[0];
  assert.ok(portrait, 'hero portrait should render');
  assert.match(portrait, /src="\/junhao-hero-color\.jpg"/);
  assert.doesNotMatch(portrait, /grayscale|contrast-|opacity-/);
  assert.ok(!hero.includes('bg-gradient-to-t from-black'), 'hero portrait should not have a dark overlay');
});
