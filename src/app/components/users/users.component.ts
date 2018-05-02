import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = this.initUser();
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {};
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        this.users = [
          {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            isActive: true,
            registered: new Date('01/02/2018 08:30:00'),
            hide: true
          },
          {
            firstName: 'Kevin',
            lastName: 'Johnson',
            email: 'kevin@gmail.com',
            isActive: false,
            registered: new Date('03/11/2017 06:30:00'),
            hide: true
          },
          {
            firstName: 'Karen',
            lastName: 'Williams',
            email: 'karen@gmail.com',
            isActive: true,
            registered: new Date('11/02/2015 12:30:00'),
            hide: true
          }
        ];
        this.loaded = true;
        resolve({status: 'loaded', code: 1});
      }, 1000);
    });
  }

  initUser() {
    return {
      firstName: '',
      lastName: '',
      email: ''
    }
  }
  onSubmit(e){
    console.log(123);
    e.preventDefault();
  }
  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);
  //   this.user = this.initUser();
  // }

 

}
