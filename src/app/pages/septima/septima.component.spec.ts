import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptimaComponent } from './septima.component';

describe('SeptimaComponent', () => {
  let component: SeptimaComponent;
  let fixture: ComponentFixture<SeptimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeptimaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeptimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
