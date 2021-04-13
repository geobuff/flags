const assert = require('assert');
const index = require('../index');

describe("index", () => {
    describe("getFlagUrl", () => {
        it("should return correct mapping for valid code", () => {
            const result = index.getFlagUrl("nz");
            assert.strictEqual("https://twemoji.maxcdn.com/v/13.0.1/svg/1f1f3-1f1ff.svg", result);
        });

        it("should return undefined for invalid code", () => {
            const result = index.getFlagUrl("test");
            assert.strictEqual(undefined, result);
        });
    });
});