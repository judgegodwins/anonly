export interface User {
  _id: string;
  username: string;
  email?: string;
  roles: string[];
  verified: boolean;
}

export interface AuthData {
  user: User;
  token: string;
  tokenExpiresOn: string;
}

export interface LoginValues {
  username: string;
  password: string;
}

export interface SignupValues extends LoginValues {
  confirm_password: string;
}

export interface SetEmailValues {
  email: string;
}