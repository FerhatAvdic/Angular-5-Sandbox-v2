import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() { }

  ngOnInit() {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        this.users = [
          {
            firstName: 'John',
            lastName: 'Doe',
            age: 30,
            address: {
              street: '50 Main st',
              city: 'Boston',
              state: 'MA'
            }
          },
          {
            firstName: 'Kevin',
            lastName: 'Johnson',
            age: 34
            // address: {
            //   street: '20 School st',
            //   city: 'Lynn',
            //   state: 'MA'
            // }
          },
          {
            firstName: 'Karen',
            lastName: 'Williams',
            // age: 20,
            address: {
              street: '55 Mill st',
              city: 'Miami',
              state: 'FL'
            }
          }
        ]
        this.showExtended = true;
        this.loaded = true;
        resolve({status: 'loaded', code: 1});
      }, 2000);
    })
    .then( (data:any) => { 
      console.log(data.status);
      this.addUser({firstName: 'Maximillian',lastName: 'Rowanson',age: 28,address: {street: '13 Mill st',city: 'New York',state: 'NY'}});
    });
    
  }

  addUser(user:User){
    this.users.push(user);
  }

}
