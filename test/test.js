const assert = require('assert');
const index = require('../index');

describe("index", () => {
    describe("getUKCountyFlagUrl", () => {
        it("should return correct mapping for valid code", () => {
            const result = index.getUKCountyFlagUrl("gb-yk");
            assert.strictEqual("https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_Yorkshire.svg", result);
        });

        it("should return undefined for invalid code", () => {
            const result = index.getUKCountyFlagUrl("test");
            assert.strictEqual(undefined, result);
        });
    });

    describe("getUSStateFlagUrl", () => {
        it("should return correct mapping for valid code", () => {
            const result = index.getUSStateFlagUrl("us-al");
            assert.strictEqual("https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg", result);
        });

        it("should return undefined for invalid code", () => {
            const result = index.getUSStateFlagUrl("test");
            assert.strictEqual(undefined, result);
        });
    });
});