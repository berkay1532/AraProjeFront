export interface LoginBody {
  email: string;
  password: string;
}

export interface SignupBody {
  fullName: string;
  email: string;
  password: string;
}

export type LoginFunctionType = (_: LoginBody) => Promise<void>;

export type SignupFunctionType = (_: SignupBody) => Promise<void>;

export type SignoutFunctionType = () => void;

export type InitFunctionType = () => void;

export interface User extends Record<string, any> {
  token: string;
}

export type SessionType = {
  user: User | null;
};

export interface SessionHookReturn {
  login: LoginFunctionType;
  signup: SignupFunctionType;
  signout: SignoutFunctionType;
  init: InitFunctionType;
  session: SessionType;
}

export type SessionHook = () => SessionHookReturn;
