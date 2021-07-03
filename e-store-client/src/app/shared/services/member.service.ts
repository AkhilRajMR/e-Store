import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EStoreStates } from '../states/estore-states';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private http: HttpClient,
    private eStoreState: EStoreStates,
    private sessionService: SessionService
  ) { }

  registerMember(user: any) {
    return new Promise((resolve, reject) => {
      this.http.post(`${environment.apiUrl}` + '/member', user)
        .subscribe(async (user: any) => {
          resolve(user);
        })
    });
  }

  getAllMembers(): Observable<any> {
    return this.http.get(`${environment.apiUrl}` + '/members')
  }

}
