export const getDocument = (database: any, reference: string) => {
  return database
    .doc(reference)
    .get()
    .then((queryDocumentSnapshot: any) => {
      if (queryDocumentSnapshot.exists) {
        return {
          _id: queryDocumentSnapshot.id,
          _reference: reference,
          ...queryDocumentSnapshot.data()
        };
      }
      return undefined;
    })
    .catch((error: any) => {
      console.error(error);
      return undefined;
    });
};

export const getDocumentsInCollection = (
  query: any,
  reference: string,
  pageLimiter?: number
) => {
  // query = db.collection(reference).where("a", "==", "b")
  const documents: { [key: string]: any } = {};
  let lastDocument: any;

  return query
    .get()
    .then((querySnapshot: any) => {
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc: any) => {
          documents[doc.id] = {
            _id: `${doc.id}`,
            _reference: `${reference}/${doc.id}`,
            ...doc.data()
          };
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
    .catch((error: any) => {
      console.error(error);
      return undefined;
    });
};
