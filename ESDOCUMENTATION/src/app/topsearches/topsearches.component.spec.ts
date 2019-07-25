import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsearchesComponent } from './topsearches.component';

describe('TopsearchesComponent', () => {
  let component: TopsearchesComponent;
  let fixture: ComponentFixture<TopsearchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopsearchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopsearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
