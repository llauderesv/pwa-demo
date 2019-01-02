import axios from 'axios';
import app from '../config';

const instance = axios.create({
  baseURL: app.apiBaseURL,
});

const signIn = (email_address, password) =>
  instance.post('auth/sign-in', { email_address, password });

export { signIn };
