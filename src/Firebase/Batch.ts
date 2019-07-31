import _ from 'lodash';

export class Batcher {
  database: any;
  batch: any;
  batchArray: Array<any>;
  batchIndex: number;
  operationCounter: number;
  operationCounterCutoff: number;

  constructor(database: any, operationCounterCutoff: number = 100) {
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

  incrementOperationCounter(operations: number) {
    this.operationCounter += operations;
  }

  set(
    reference: any,
    data: any,
    options: any = {},
    additionalOperations: number = 0
  ) {
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
      result.push(
        await batch
          .commit()
          .then(() => true)
          .catch((e: Error) => {
            console.error(e);
            return e;
          })
      );
      return result;
    }, []);

    return _.pull(errors, true);
  }
}
