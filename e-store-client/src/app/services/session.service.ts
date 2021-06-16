import { Injectable } from '@angular/core';
import { Role } from '../models/role.model';
import { User } from '../models/user.model';
import { EStoreState } from '../states/e-store-state.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  userRoles = [
    {
      roleId: 1,
      role: Role.Admin
    },
    {
      roleId: 2,
      role: Role.User
    }
  ]

  constructor(
    private eStoreState: EStoreState
  ) {
  }

  invoke(user: User) {
    this.setUser(user);
  }

  revoke() {
    localStorage.removeItem('loggedUser');
    this.eStoreState.updateUser(null);
  }

  setUser(user: User) {
    localStorage.setItem('loggedUser', JSON.stringify(user));
    this.eStoreState.updateUser(user);
  }

  getUser(): User {
    let user = null;
    if (localStorage.getItem('loggedUser')) {
      user = JSON.parse(localStorage.getItem('loggedUser') || '{}');
    }
    return user;
  }

  setUserRole(user: User) {
    return this.userRoles.filter(role => role.role === user.roles[0])[0].role;
  }

  isAdmin() {
    let user = JSON.parse(localStorage.getItem('loggedUser') || '{}');
    if (user && user.userRole === Role.Admin) {
      return true;
    }
    else {
      return false;
    }
  }
}
