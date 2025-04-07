export type LoginForm = {
  email: string;
  password: string;
};

export type UserLogin = {
  email: string;
  entityId: string;
  token: string;
  role: "user" | "admin";
  expiration: string;
  fullName: string;
};

export type UserRegister = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
};
