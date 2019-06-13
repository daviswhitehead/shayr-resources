"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDocument = (database, reference) => {
    return database
        .doc(reference)
        .get()
        .then((queryDocumentSnapshot) => {
        if (queryDocumentSnapshot.exists) {
            return Object.assign({ _id: queryDocumentSnapshot.id, _reference: reference }, queryDocumentSnapshot.data());
        }
        return undefined;
    })
        .catch((error) => {
        console.error(error);
        return undefined;
    });
};
exports.getDocumentsInCollection = (query, reference, pageLimiter) => {
    // query = db.collection(reference).where("a", "==", "b")
    const documents = {};
    let lastDocument;
    return query
        .get()
        .then((querySnapshot) => {
        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                documents[doc.id] = Object.assign({ _id: `${doc.id}`, _reference: `${reference}/${doc.id}` }, doc.data());
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
