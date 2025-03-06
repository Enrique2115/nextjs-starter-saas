export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  name: string;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  user: User;
}

interface User {
  id: string;
  email: string;
  name: string;
  roles: string[];
}
