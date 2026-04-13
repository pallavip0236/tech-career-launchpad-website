// .prettierrc.json.test.ts
import { readFile } from '@web/test-runner-commands';

describe('.prettierrc.json', () => {
  it('should contain basic Prettier configuration', async () => {
    const content = await readFile('.prettierrc.json');
    assert.include(content, '"semi": true,');
    assert.include(content, '"singleQuote": true,');
    assert.include(content, '"printWidth": 100,');
  });
});
