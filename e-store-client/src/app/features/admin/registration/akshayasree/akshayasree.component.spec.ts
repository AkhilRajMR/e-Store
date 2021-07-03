import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkshayasreeComponent } from './akshayasree.component';

describe('AkshayasreeComponent', () => {
  let component: AkshayasreeComponent;
  let fixture: ComponentFixture<AkshayasreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkshayasreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkshayasreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
