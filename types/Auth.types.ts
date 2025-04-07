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
