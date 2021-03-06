import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { Role } from '../models/role.model';
import { SessionService } from './session.service';
import { EStoreState } from '../states/e-store-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private eStoreState: EStoreState,
    private sessionService: SessionService
    ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    // return this.http.post<any>(`${environment.apiUrl}/user/`, )
    //   .pipe(map(user => {
    //     if (user) {
    //       user.userRole = this.sessionService.setUserRole(user);
    //       this.sessionService.setUser(user);
    //     }
    //     return user;
    //   }));
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.apiUrl}` + 'auth', {username, password})
      .subscribe(async (user: any) => {
              if (user) {
                user.userRole = this.sessionService.setUserRole(user);
                this.sessionService.setUser(user);
              }
              resolve(user);
      })
    })

  }

  logout() {
    this.sessionService.revoke();
  }
}
