import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaryComponent } from './temary.component';

describe('TemaryComponent', () => {
  let component: TemaryComponent;
  let fixture: ComponentFixture<TemaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
