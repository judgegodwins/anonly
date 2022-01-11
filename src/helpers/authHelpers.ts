import { AuthData } from "types/auth";

export const saveAuthData = (data: AuthData) => {
  localStorage.setItem('auth_data', JSON.stringify(data));
}

export const getAuthData = () => {
  const str = localStorage.getItem('auth_data');
  const data: AuthData | null = str ? JSON.parse(str) : null;

  return data;
}

export const getAccessToken = () => {
  return getAuthData()?.token;
}

export const userEmailIsVerified = () => {
  const data = getAuthData();
  if (!data) return false;

  return Boolean(data.user.email && data.user.verified);
}

export const setProposedEmail = (email: string) => {
  localStorage.setItem('proposed_email', email);
}

export const removeProposedEmail = () => {
  localStorage.removeItem('proposed_email');
}