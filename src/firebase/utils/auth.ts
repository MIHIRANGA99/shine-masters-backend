import { HttpException } from '@nestjs/common';
import { app } from '../initialize';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  UserCredential,
  updateProfile,
} from 'firebase/auth';

const auth = getAuth(app);

export const registerUser = async (
  email: string,
  password: string,
  username: string,
): Promise<UserCredential> | null => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user.user, { displayName: username });
    return user;
  } catch (err) {
    return null;
  }
};

export const loginUser = async (
  email: string,
  password: string,
): Promise<UserCredential> | null => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (e) {
    return null;
  }
};

export const logoutUser = () => {
  signOut(auth)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error('err', err);
    });
};
