import _ from 'lodash';

export const ts = (db: any) => db.FieldValue.serverTimestamp();
export const arrayUnion = (db: any, item: any) => {
  if (_.isArray(item)) {
    return db.FieldValue.arrayUnion(...item);
  }
  return db.FieldValue.arrayUnion(item);
};
export const arrayRemove = (db: any, item: any) => {
  if (_.isArray(item)) {
    return db.FieldValue.arrayRemove(...item);
  }
  return db.FieldValue.arrayRemove(item);
};
export const increment = (db: any, item: number) =>
  db.FieldValue.increment(item);
