"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
class Batcher {
    constructor(database, operationCounterCutoff = 100) {
        this.database = database;
        this.batch = this._createBatch();
        this.batchArray = [this.batch];
        this.batchIndex = 0;
        this.operationCounter = 0;
        this.operationCounterCutoff = operationCounterCutoff;
    }
    _createBatch() {
        return this.database.batch();
    }
    incrementOperationCounter(operations) {
        this.operationCounter += operations;
    }
    set(reference, data, options = {}, additionalOperations = 0) {
        this.batchArray[this.batchIndex].set(reference, data, options);
        this.operationCounter += 1 + additionalOperations;
        if (this.operationCounter === this.operationCounterCutoff) {
            this.batchArray.push(this._createBatch());
            this.batchIndex += 1;
            this.operationCounter = 0;
        }
    }
    write() {
        // this.batchArray.forEach(async batch => await batch.commit());
        const errors = this.batchArray.reduce(async (result, batch) => {
            result.push(await batch
                .commit()
                .then(() => true)
                .catch((e) => {
                console.error(e);
                return e;
            }));
            return result;
        }, []);
        return lodash_1.default.pull(errors, true);
    }
}
exports.Batcher = Batcher;
