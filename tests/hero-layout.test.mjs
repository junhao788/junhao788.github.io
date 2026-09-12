import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'out', 'index.html'), 'utf8');

test('hero introduction comes before the portrait in reading order', () => {
  const title = html.indexOf('JUN HAO');
  const introduction = html.indexOf('Frontend &amp; Full-Stack Developer');
  const portrait = html.indexOf('Jun Hao Lim Portrait');

  assert.ok(title >= 0 && introduction >= 0 && portrait >= 0);
  assert.ok(title < introduction);
  assert.ok(introduction < portrait);
});
