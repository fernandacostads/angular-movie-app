import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users: User[]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.read().subscribe(users => {
      this.users = users
      console.log(users)
    })
  }

}
