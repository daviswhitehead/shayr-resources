"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    set(reference, data, options, additionalOperations = 0) {
        this.batchArray[this.batchIndex].set(reference, data, options);
        this.operationCounter += 1 + additionalOperations;
        if (this.operationCounter === this.operationCounterCutoff) {
            this.batchArray.push(this._createBatch());
            this.batchIndex += 1;
            this.operationCounter = 0;
        }
    }
    write() {
        this.batchArray.forEach(async (batch) => await batch.commit());
    }
}
exports.Batcher = Batcher;
