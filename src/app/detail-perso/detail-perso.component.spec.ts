import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPersoComponent } from './detail-perso.component';

describe('DetailPersoComponent', () => {
  let component: DetailPersoComponent;
  let fixture: ComponentFixture<DetailPersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
