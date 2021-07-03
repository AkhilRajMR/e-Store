import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/shared/services/member.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  memberList = [];

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit(): void {
    this.memberService.getAllMembers()
    .subscribe(
      (response) => {
        console.log(response);
        this.memberList = response;
      },
      (err) => {
        console.error('Request failed with error')
      }
    )
  }

}
