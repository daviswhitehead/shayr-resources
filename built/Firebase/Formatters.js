"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDocumentSnapshot = (documentSnapshot) => {
    return Object.assign({}, documentSnapshot.data(), { _id: documentSnapshot.id, _reference: documentSnapshot.ref.path });
};
