import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


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
  @ViewChild('userForm') form: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    
    this.userService.getUsers()
    .subscribe(data => {
        this.users = data;
        this.loaded = true;
      });
    this.userService.getData().subscribe(data => {
      console.log(data);
    });
  }

  initUser() {
    return {
      firstName: '',
      lastName: '',
      email: ''
    }
  }
  onSubmit({value, valid}: {value: User, valid: boolean}){
    if(!valid){
      console.log("Form is not valid");
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.userService.addUser(value);
      this.form.reset();
    }
  }

 

}
