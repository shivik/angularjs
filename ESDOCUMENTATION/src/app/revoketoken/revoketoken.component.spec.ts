import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevoketokenComponent } from './revoketoken.component';

describe('RevoketokenComponent', () => {
  let component: RevoketokenComponent;
  let fixture: ComponentFixture<RevoketokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevoketokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevoketokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
