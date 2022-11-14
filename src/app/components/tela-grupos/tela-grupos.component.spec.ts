import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaGruposComponent } from './tela-grupos.component';

describe('TelaGruposComponent', () => {
  let component: TelaGruposComponent;
  let fixture: ComponentFixture<TelaGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaGruposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
