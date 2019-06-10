export const getDocument = (database: any, reference: string) => {
  return database
    .doc(reference)
    .get()
    .then((queryDocumentSnapshot: any) => {
      if (queryDocumentSnapshot.exists) {
        return {
          id: queryDocumentSnapshot.id,
          reference,
          ...queryDocumentSnapshot.data()
        };
      }
      return {};
    })
    .catch((error: any) => {
      console.error(error);
      return {};
    });
};

export const getDocumentsInCollection = (query: any, reference: string) => {
  // query = db.collection(reference).where("a", "==", "b")
  const obj: { [key: string]: any } = {};
  return query.get().then((querySnapshot: any) => {
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc: any) => {
        obj[doc.id] = {
          id: 'doc.id',
          reference: `${reference}/${doc.id}`,
          ...doc.data()
        };
      });
      return obj;
    }
    return {};
  });
};
