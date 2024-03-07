// Simple test script with mocha and chai
import 'chai/register-should.js';
import fs from 'fs';
import path from 'path';

describe('Space Ship Image', function() {
  const file = path.resolve('./public/views/sample.png');
  it(`should exist in this repository: ${file}`, function() {
    should.equal(true, fs.existsSync(file));
  });
});
