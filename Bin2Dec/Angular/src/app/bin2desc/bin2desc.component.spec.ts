import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bin2descComponent } from './bin2desc.component';

describe('Bin2descComponent', () => {
  let component: Bin2descComponent;
  let fixture: ComponentFixture<Bin2descComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bin2descComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bin2descComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
