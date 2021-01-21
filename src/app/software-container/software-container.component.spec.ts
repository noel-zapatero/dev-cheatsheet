import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareContainerComponent } from './software-container.component';

describe('SoftwareContainerComponent', () => {
  let component: SoftwareContainerComponent;
  let fixture: ComponentFixture<SoftwareContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
