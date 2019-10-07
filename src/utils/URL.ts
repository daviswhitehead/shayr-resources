import urlRegex from 'url-regex';
import _ from 'lodash';

export const getURLFromString = (payload: string) => {
  const matches = payload.match(urlRegex());
  return _.isEmpty(matches) ? '' : matches![0];
};
