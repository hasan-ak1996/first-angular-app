import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtuctedComponent } from './protucted.component';

describe('ProtuctedComponent', () => {
  let component: ProtuctedComponent;
  let fixture: ComponentFixture<ProtuctedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtuctedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtuctedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
