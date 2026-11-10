export type LoginForm = {
  email: string;
  password: string;
};

export type UserRegister = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  firebase_id?: string;
};
