const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const path = require('node:path');
const test = require('node:test');

test('project Markdown layout utilities are included in generated CSS', () => {
  const css = execFileSync(
    process.execPath,
    [require.resolve('tailwindcss/lib/cli'), '--config', 'tailwind.config.js'],
    {
      cwd: path.resolve(__dirname, '..'),
      input: '@tailwind utilities;',
      encoding: 'utf8',
    }
  );

  assert.match(
    css,
    /\.p-6\s*\{\s*padding:\s*1\.5rem\s*;?\s*\}/,
    'Project content cards must retain the padding declared in Markdown'
  );
  assert.match(
    css,
    /\.list-inside\s*\{\s*list-style-position:\s*inside\s*;?\s*\}/,
    'Project lists must retain their Markdown layout utilities'
  );
});
