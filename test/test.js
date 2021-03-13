const assert = require('assert');
const index = require('../index');

describe("index", () => {
    describe("getFlagUrl", () => {
        it("should return correct mapping for valid code", () => {
            const result = index.getFlagUrl("gb-yk");
            assert.strictEqual("https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_Yorkshire.svg", result);
        });

        it("should return undefined for invalid code", () => {
            const result = index.getFlagUrl("test");
            assert.strictEqual(undefined, result);
        });
    });
});