export interface IUserData {
  name: string;
  last_name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}
