import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDemo.Component } from './user-demo.component';

describe('UserDemo.InjectorComponent', () => {
  let component: UserDemo.InjectorComponent;
  let fixture: ComponentFixture<UserDemo.InjectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDemo.InjectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDemo.InjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
