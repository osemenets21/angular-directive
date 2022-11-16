export class User {
  login: string;
  password: string;
  email: string;
  constructor(userLogin: string, userPassword: string, userEmail: string) {
    this.login = userLogin;
    this.password = userPassword;
    this.email = userEmail;
  }
}
