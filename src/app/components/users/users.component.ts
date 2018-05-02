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
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {};
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
    return new Promise( (resolve, reject) => {
      // this.setCurrentClasses();
      // this.setCurrentStyles();
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
            },
            // image: 'http://lorempixel.com/600/600/people/3',
            isActive: true,
            // balance: 100,
            registered: new Date('01/02/2018 08:30:00'),
            hide: true
          },
          {
            firstName: 'Kevin',
            lastName: 'Johnson',
            age: 34,
            // address: {
            //   street: '20 School st',
            //   city: 'Lynn',
            //   state: 'MA'
            // }
            // image: 'http://lorempixel.com/600/600/people/2',
            isActive: false,
            // balance: 200,
            registered: new Date('03/11/2017 06:30:00'),
            hide: true
          },
          {
            firstName: 'Karen',
            lastName: 'Williams',
            // age: 20,
            address: {
              street: '55 Mill st',
              city: 'Miami',
              state: 'FL'
            },
            // image: 'http://lorempixel.com/600/600/people/1',
            isActive: true,
            // balance: 50,
            registered: new Date('11/02/2015 12:30:00'),
            hide: true
          }
        ]
        this.loaded = true;
        resolve({status: 'loaded', code: 1});
      }, 2000);
    });
    // .then( (data:any) => { 
    //   console.log(data.status);
    //   this.addUser({firstName: 'Maximillian',lastName: 'Rowanson',age: 28,address: {street: '13 Mill st',city: 'New York',state: 'NY'}});
    // });
    
  }

  fireEvent(e){
    console.log(e.target.value);
  }

  onSubmit(e){
    console.log(123);
    e.preventDefault();
  }

  // toggleHide(user){
  //   user.hide = !user.hide;
  // }

  // addUser(user:User){
  //   this.users.push(user);
  // }
  // setCurrentClasses(){
  //   this.currentClasses = {
  //     'btn-success': this.enableAdd,
  //     'big-text': this.showExtended
  //   }
  // }
  // setCurrentStyles(){
  //   this.currentStyles = {
  //     'font-size': this.showExtended ? '':'40px'
  //   }
  // }


}
