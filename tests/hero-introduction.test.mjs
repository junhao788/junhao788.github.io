import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'out', 'index.html'), 'utf8');

test('the built home page introduces the agreed developer role and focus', () => {
  assert.match(html, /Frontend &amp; Full-Stack Developer/);
  assert.match(html, /Building web experiences for FinTech and Web3\./);
  assert.doesNotMatch(html, /Final-year Computer Science student\./);
});
