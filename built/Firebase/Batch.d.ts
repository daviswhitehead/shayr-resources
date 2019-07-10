export declare class Batcher {
    database: any;
    batch: any;
    batchArray: Array<any>;
    batchIndex: number;
    operationCounter: number;
    operationCounterCutoff: number;
    constructor(database: any, operationCounterCutoff?: number);
    _createBatch(): any;
    incrementOperationCounter(operations: number): void;
    set(reference: any, data: any, options: any, additionalOperations?: number): void;
    write(): void;
}
