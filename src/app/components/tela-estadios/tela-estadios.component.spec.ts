import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEstadiosComponent } from './tela-estadios.component';

describe('TelaEstadiosComponent', () => {
  let component: TelaEstadiosComponent;
  let fixture: ComponentFixture<TelaEstadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaEstadiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaEstadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
