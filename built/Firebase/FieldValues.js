"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
exports.ts = (db) => db.FieldValue.serverTimestamp();
exports.arrayUnion = (db, item) => {
    if (lodash_1.default.isArray(item)) {
        return db.FieldValue.arrayUnion(...item);
    }
    return db.FieldValue.arrayUnion(item);
};
exports.arrayRemove = (db, item) => {
    if (lodash_1.default.isArray(item)) {
        return db.FieldValue.arrayRemove(...item);
    }
    return db.FieldValue.arrayRemove(item);
};
exports.increment = (db, item) => db.FieldValue.increment(item);
