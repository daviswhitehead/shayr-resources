"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_regex_1 = __importDefault(require("url-regex"));
const lodash_1 = __importDefault(require("lodash"));
exports.getURLFromString = (payload) => {
    const matches = payload.match(url_regex_1.default());
    return lodash_1.default.isEmpty(matches) ? '' : matches[0];
};
