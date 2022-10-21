import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuchaComponent } from './escucha.component';

describe('EscuchaComponent', () => {
  let component: EscuchaComponent;
  let fixture: ComponentFixture<EscuchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscuchaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscuchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
