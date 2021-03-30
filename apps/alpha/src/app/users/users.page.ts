import { Component, OnInit } from '@angular/core';
import { UserService } from '@myorg/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss'],
})
export class UsersPage implements OnInit {
  public users$: Observable<any[]>;

  constructor(private users: UserService) {}

  async ngOnInit() {
    this.users$ = this.users.getUsers();
  }
}
