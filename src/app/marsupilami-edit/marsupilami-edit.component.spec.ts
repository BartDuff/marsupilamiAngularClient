import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsupilamiEditComponent } from './marsupilami-edit.component';

describe('MarsupilamiEditComponent', () => {
  let component: MarsupilamiEditComponent;
  let fixture: ComponentFixture<MarsupilamiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsupilamiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsupilamiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
