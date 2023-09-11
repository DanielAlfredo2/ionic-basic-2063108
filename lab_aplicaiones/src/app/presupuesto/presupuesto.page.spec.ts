import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PresupuestoPage } from './presupuesto.page';

describe('PresupuestoPage', () => {
  let component: PresupuestoPage;
  let fixture: ComponentFixture<PresupuestoPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(PresupuestoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
