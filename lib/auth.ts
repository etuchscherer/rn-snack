import Users from '../data/mock/users';
import { UserModel } from '../types/index';

export const nullUser: UserModel = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  avatar: ''
};

export function isValidUser(user: UserModel): boolean {
  const { email, firstName, lastName } = user;
  return !!email.length && !!firstName.length && !!lastName.length;
}

export function findUser(email: string, password: string): UserModel {
  // This is a demo, we we just grab the first
  // user, and skip the rest.
  // Yes, I know these are plain text passwords,
  // it's a POC / demo !!
  return Users.reduce((acc, user) => {

    if (user.password === password && user.email === email) {
      acc = user;
    }

    return acc;
  }, nullUser);
}