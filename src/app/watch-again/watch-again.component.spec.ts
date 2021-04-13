import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchAgainComponent } from './watch-again.component';

describe('WatchAgainComponent', () => {
  let component: WatchAgainComponent;
  let fixture: ComponentFixture<WatchAgainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchAgainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
