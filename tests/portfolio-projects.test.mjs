import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const testDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(testDirectory, '..');
const homePage = fs.readFileSync(path.join(projectRoot, 'src', 'app', 'page.tsx'), 'utf8');

test('lists Higgspay as the fourth portfolio project', () => {
  assert.match(homePage, /001 — 004/);
  assert.match(homePage, /title: 'HIGGSPAY'/);
  assert.match(homePage, /link: 'https:\/\/higgs-website-orpin\.vercel\.app\/'/);
  assert.equal(
    fs.existsSync(path.join(projectRoot, 'public', 'higgspay.png')),
    true,
    'expected public/higgspay.png to exist',
  );
});
