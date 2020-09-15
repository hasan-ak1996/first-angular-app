import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeExampelsComponent } from './pipe-exampels.component';

describe('PipeExampelsComponent', () => {
  let component: PipeExampelsComponent;
  let fixture: ComponentFixture<PipeExampelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeExampelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeExampelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
