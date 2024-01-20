// Simple test script with mocha and chai
import 'chai/register-should.js';
import fs from 'fs';

describe('Space Ship Image', function () {
    it('should exist in this repository', function () {
        should.equal(true, fs.existsSync("./views/sample.png"));
    });
});