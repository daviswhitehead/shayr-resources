import { User } from '../DataModel/Objects';

export const getUserShortName = (user: User) => {
  return `${user.firstName ? user.firstName + ' ' : ''}${
    user.lastName ? user.lastName.charAt(0) + ' ' : ''
  }`;
};

export const getUserFullName = (user: User) => {
  return `${user.firstName ? user.firstName + ' ' : ''}${
    user.lastName ? user.lastName + ' ' : ''
  }`;
};
