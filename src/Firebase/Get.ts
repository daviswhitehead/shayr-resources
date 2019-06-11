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

export const getDocumentsInCollection = (query: any, reference: string) => {
  // query = db.collection(reference).where("a", "==", "b")
  const obj: { [key: string]: any } = {};

  return query
    .get()
    .then((querySnapshot: any) => {
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc: any) => {
          obj[doc.id] = {
            _id: `${doc.id}`,
            _reference: `${reference}/${doc.id}`,
            ...doc.data()
          };
        });
        return obj;
      }
      return undefined;
    })
    .catch((error: any) => {
      console.error(error);
      return undefined;
    });
};
