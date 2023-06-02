import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSessioGerardComponent } from './iniciar-sessio-gerard.component';

describe('IniciarSessioGerardComponent', () => {
  let component: IniciarSessioGerardComponent;
  let fixture: ComponentFixture<IniciarSessioGerardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSessioGerardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSessioGerardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
