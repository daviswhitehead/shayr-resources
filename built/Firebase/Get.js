"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Formatters_1 = require("./Formatters");
exports.getDocument = (database, reference) => {
    return database
        .doc(reference)
        .get()
        .then((queryDocumentSnapshot) => {
        if (queryDocumentSnapshot.exists) {
            return Formatters_1.formatDocumentSnapshot(queryDocumentSnapshot);
        }
        return undefined;
    })
        .catch((error) => {
        console.error(error);
        return undefined;
    });
};
exports.getDocumentsInCollection = (query, pageLimiter) => {
    const documents = {};
    let lastDocument;
    return query
        .get()
        .then((querySnapshot) => {
        if (!querySnapshot.empty) {
            querySnapshot.forEach((queryDocumentSnapshot) => {
                documents[queryDocumentSnapshot.id] = Formatters_1.formatDocumentSnapshot(queryDocumentSnapshot);
            });
            if (pageLimiter) {
                lastDocument =
                    querySnapshot.docs.length === pageLimiter
                        ? querySnapshot.docs[querySnapshot.docs.length - 1]
                        : 'done';
            }
            return { documents, lastDocument };
        }
        return undefined;
    })
        .catch((error) => {
        console.error(error);
        return undefined;
    });
};
