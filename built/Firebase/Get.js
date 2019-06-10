"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDocument = (database, reference) => database.get(reference).then((queryDocumentSnapshot) => {
    if (queryDocumentSnapshot.exists) {
        return Object.assign({ id: queryDocumentSnapshot.id, reference }, queryDocumentSnapshot.data());
    }
    return {};
});
exports.getDocumentsInCollection = (query, reference) => {
    // query = db.collection(reference).where("a", "==", "b")
    const obj = {};
    return query.get().then((querySnapshot) => {
        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                obj[doc.id] = Object.assign({ id: 'doc.id', reference: `${reference}/${doc.id}` }, doc.data());
            });
            return obj;
        }
        return {};
    });
};
