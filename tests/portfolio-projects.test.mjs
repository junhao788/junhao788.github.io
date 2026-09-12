import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const testDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(testDirectory, '..');
const html = fs.readFileSync(path.join(projectRoot, 'out', 'index.html'), 'utf8');

test('renders projects in the requested priority order', () => {
  const titles = [...html.matchAll(/<h3[^>]*>(HIGGSPAY|WARRENTEXT|CARDLINK|FILPAL DIRECTORY SYSTEM)<\/h3>/g)]
    .map((match) => match[1]);

  assert.deepEqual(titles, ['HIGGSPAY', 'WARRENTEXT', 'CARDLINK', 'FILPAL DIRECTORY SYSTEM']);
});

test('keeps the Higgspay project image available', () => {
  assert.equal(
    fs.existsSync(path.join(projectRoot, 'public', 'higgspay.png')),
    true,
    'expected public/higgspay.png to exist',
  );
});
