import { User } from '../DataModel/Objects';

export const getUserShortName = (user: User) =>
  `${user.firstName} ${user.lastName.charAt(0)}`;
