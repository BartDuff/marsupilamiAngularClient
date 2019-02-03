import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsupilamiListComponent } from './marsupilami-list.component';

describe('MarsupilamiListComponent', () => {
  let component: MarsupilamiListComponent;
  let fixture: ComponentFixture<MarsupilamiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsupilamiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsupilamiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
