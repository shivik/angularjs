import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemappingsComponent } from './updatemappings.component';

describe('UpdatemappingsComponent', () => {
  let component: UpdatemappingsComponent;
  let fixture: ComponentFixture<UpdatemappingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatemappingsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemappingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
