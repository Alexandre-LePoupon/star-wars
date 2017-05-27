import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchePersoComponent } from './recherche-perso.component';

describe('RecherchePersoComponent', () => {
  let component: RecherchePersoComponent;
  let fixture: ComponentFixture<RecherchePersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecherchePersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchePersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
