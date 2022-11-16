import { Component } from '@angular/core';
import { User } from './classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular users task';

  userIndex!: number;
  login!: string;
  password!: string;
  email!: string;
  arrUsers: any = [];
  editStatus = false;

  addUser() {
    if (this.login && this.email && this.password) {
      let newUser: User = new User(this.login, this.password, this.email);
      this.arrUsers.push(newUser);
      this.login = '';
      this.password = '';
      this.email = '';
    }
  }

  deleteUser(index: number): void {
    this.arrUsers.splice(index, 1);
  }

  editUser(index: number): void {
    this.login = this.arrUsers[index].login;
    this.password = this.arrUsers[index].password;
    this.email = this.arrUsers[index].email;
    this.editStatus = true;
    this.userIndex = index;
  }

  saveEditUser(): void {
    let updateUser: User = new User(this.login, this.password, this.email);
    this.arrUsers[this.userIndex] = updateUser;

    this.editStatus = false;
    this.login = '';
    this.password = '';
    this.email = '';
  }
}
