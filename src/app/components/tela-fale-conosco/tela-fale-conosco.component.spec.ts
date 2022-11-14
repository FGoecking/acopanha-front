import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFaleConoscoComponent } from './tela-fale-conosco.component';

describe('TelaFaleConoscoComponent', () => {
  let component: TelaFaleConoscoComponent;
  let fixture: ComponentFixture<TelaFaleConoscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaFaleConoscoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaFaleConoscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
