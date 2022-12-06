import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaBandaComponent } from './agrega-banda.component';

describe('AgregaBandaComponent', () => {
  let component: AgregaBandaComponent;
  let fixture: ComponentFixture<AgregaBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaBandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregaBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
