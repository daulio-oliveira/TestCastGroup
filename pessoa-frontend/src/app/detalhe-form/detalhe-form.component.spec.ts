import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheFormComponent } from './detalhe-form.component';

describe('DetalheFormComponent', () => {
  let component: DetalheFormComponent;
  let fixture: ComponentFixture<DetalheFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
