import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { SessionService } from 'src/app/services/session.service';
import { EStoreState } from 'src/app/states/e-store-state.service';

@Component({
  selector: 'e-store-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit, OnDestroy {

  isAdmin = false;
  loggedUser!: User;

  private _unsubscribeAll = new Subject();

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private sessionService: SessionService,
    private eStoreState: EStoreState
  ) {
    this.eStoreState.onUserDataChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(userProfile => {
        console.log(userProfile);
        this.loggedUser = userProfile;
        this.isAdmin = this.sessionService.isAdmin();
      })
  }

  isCollapsed = false;

  ngOnInit(): void {
    this.loggedUser = this.sessionService.getUser();
    this.isAdmin = this.sessionService.isAdmin();
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    this.sessionService.revoke();
    this.router.navigate(['/']);
  }

}
