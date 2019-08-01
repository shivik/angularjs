import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchbyidComponent } from './fetchbyid.component';

describe('FetchbyidComponent', () => {
  let component: FetchbyidComponent;
  let fixture: ComponentFixture<FetchbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
