import { formatDocumentSnapshot } from './Formatters';

export const getDocument = (database: any, reference: string) => {
  return database
    .doc(reference)
    .get()
    .then((queryDocumentSnapshot: any) => {
      if (queryDocumentSnapshot.exists) {
        return formatDocumentSnapshot(queryDocumentSnapshot);
      }
      return undefined;
    })
    .catch((error: any) => {
      console.error(error);
      return undefined;
    });
};

export const getDocumentsInCollection = (query: any, pageLimiter?: number) => {
  const documents: { [key: string]: any } = {};
  let lastDocument: any;

  return query
    .get()
    .then((querySnapshot: any) => {
      if (!querySnapshot.empty) {
        querySnapshot.forEach((queryDocumentSnapshot: any) => {
          documents[queryDocumentSnapshot.id] = formatDocumentSnapshot(
            queryDocumentSnapshot
          );
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
