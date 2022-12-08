import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaNotaComponent } from './agrega-nota.component';

describe('AgregaNotaComponent', () => {
  let component: AgregaNotaComponent;
  let fixture: ComponentFixture<AgregaNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaNotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregaNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
