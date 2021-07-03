import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppDataService } from 'src/app/shared/services/app-data.service';
import { MemberService } from 'src/app/shared/services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  memberRegistrationForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  districtList = [];
  talukList = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private appDataService: AppDataService,
    private memberService: MemberService,
    private toastr: ToastrService
  ) {
    this.memberRegistrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      membershipId: [''],
      age: ['', Validators.required],
      dob: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      homeNumber: [''],
      officeNumber: [''],
      address: ['', Validators.required],
      nameOfLocalBody: ['', Validators.required],
      ward: ['', Validators.required],
      houseNumber: ['', Validators.required],
      sanghName: ['', Validators.required],
      district: ['', Validators.required],
      taluk: ['', Validators.required],
      nameOfGuardian: ['', Validators.required],
      anualIncome: ['', Validators.required],
      occupation: ['', Validators.required],
      rationCardNumber: ['', Validators.required],
      rationCardType: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      educationQualification: ['', Validators.required],
      religion: ['', Validators.required],
      cast: ['', Validators.required],
      reservationCategory: ['', Validators.required],
      residentialHousing: ['', Validators.required],
      drinkingWater: ['', Validators.required],
      toiletFacility: ['', Validators.required],
      electricityAvailability: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.districtList = this.appDataService.districtList;
  }

  onSubmit() {
    console.log(this.memberRegistrationForm);
    this.memberService.registerMember(this.memberRegistrationForm.value).then(
      (data) => {
        this.toastr.success('Member registered.!');
        this.router.navigateByUrl("/dashboard");
      },
      (err) => {
        alert("error occured")
      }
    )
  }

  onDistrictSelect(district) {
    this.talukList = this.appDataService.talukList.filter(item => item.districtId === Number(district));
  }

}
