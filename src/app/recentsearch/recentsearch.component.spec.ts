import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentsearchComponent } from './recentsearch.component';

describe('RecentsearchComponent', () => {
  let component: RecentsearchComponent;
  let fixture: ComponentFixture<RecentsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
