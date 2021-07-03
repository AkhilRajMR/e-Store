import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() loggedUser: any = {};
  @Input() isAdmin: boolean = false;

  constructor(
    private router: Router,
    private sessionService: SessionService,
  ) { }

  ngOnInit(): void {
    console.log(this.loggedUser);
  }

  logout() {
    this.sessionService.revoke();
    this.router.navigate(['/login']);
  }

}
