export interface DocumentFormatting {
  _id?: string;
  _reference?: string;
}

export const formatDocumentSnapshot = (documentSnapshot: any) => {
  return {
    ...documentSnapshot.data(),
    _id: documentSnapshot.id,
    _reference: documentSnapshot.ref.path
  };
};
