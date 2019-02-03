import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsupilamiRegistrationComponent } from './marsupilami-registration.component';

describe('MarsupilamiRegistrationComponent', () => {
  let component: MarsupilamiRegistrationComponent;
  let fixture: ComponentFixture<MarsupilamiRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsupilamiRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsupilamiRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
