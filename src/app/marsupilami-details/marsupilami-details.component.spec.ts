import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsupilamiDetailsComponent } from './marsupilami-details.component';

describe('MarsupilamiDetailsComponent', () => {
  let component: MarsupilamiDetailsComponent;
  let fixture: ComponentFixture<MarsupilamiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsupilamiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsupilamiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
