import { AuthData } from "types/auth";

export const saveAuthData = (token: string) => {
  localStorage.setItem('auth_data', token);
}

export const deleteAuthData = () => {
  localStorage.removeItem('auth_data');
}

export const getAccessToken = () => {
  return localStorage.getItem('auth_data');
}

export const setProposedEmail = (email: string) => {
  localStorage.setItem('proposed_email', email);
}

export const removeProposedEmail = () => {
  localStorage.removeItem('proposed_email');
}